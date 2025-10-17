import { Injectable } from '@nestjs/common';
import { AccessibilityScanDto } from '@kompo/types';
import { A11yRepository } from '../../core/application/port/a11y.repository';
import { chromium } from 'playwright';
import type { AxeResults } from 'axe-core';
import { injectAxe } from 'axe-playwright';

@Injectable()
export class A11yAccessibilityRepository implements A11yRepository {
  async SerializeSanityBody(dto: AccessibilityScanDto): Promise<any> {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    try {
      console.log(dto.url);
      await page.goto(dto.url, { waitUntil: 'networkidle' });
      await injectAxe(page);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const results: AxeResults = await page.evaluate(async () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
        return await window.axe.run(document, {
          runOnly: {
            type: 'tag',
            values: ['wcag2a', 'wcag2aa'],
          },
          resultTypes: ['violations'],
        });
      });

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return results.violations;
    } finally {
      await browser.close();
    }
  }
}
