# Origin Financial - Frontend Challenge

This is an attempt at doing [OriginFinancial's Frontend Challenge](https://github.com/OriginFinancial/frontend-take-home-assignment) , only for the sake of learning and fun (not actual part of a hiring process). Started @ May 7th 2022, ended @ May 10th 2022.

## Stack

The main focus was to create an end product that is the absolute leanest and simple, while meeting the challenge's basic criterea. There was also a focus on making sure the end product is as libre as it can be, respecting the end user's digital liberties and data.

### Production

- Alpinejs: Used for implementing reactivity at a minimum computational and complexity cost;
- Alpinejs Mask: Plugin for Alpinejs for handling currency masks. Used for the sake of time;
- Dayjs: Lean and simple date handling library;
- Google Fonts: For ease of font usage;

### Development

- Gulp: Used for preparing all files for production, file watch and handling of dev server;
- Jest: For running tests;
- Jest-puppeteer (+ puppeteer itself): For testing the page as a whole;
- Lighthouse: For benchmarking the page's performance;

## Running

1. Clone this repo;
2. `cd /path/to/origin-frontend-challenge`;
3. `yarn install`;
4. `yarn gulp`;

The application can be accessed on `http://localhost:8034`

## Testing

1. `yarn gulp`;
2. `yarn test`;

## Benchmarking

1. `yarn gulp`;
2. `yarn bench`;

Note: You may need to first run `chmod +x ./scripts/bench.sh` before `yarn bench`.

## Final considerations

Might use this for some PWA tests later after this commit.  
Also, thanks to Origin Financial for making this challenge, as well as it's assets, free for the public.
