/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';

// Seemingly needed to test modules with async functions
// https://stackoverflow.com/questions/42535270/regeneratorruntime-is-not-defined-when-running-jest-test
import 'regenerator-runtime/runtime';

import { configure } from '@testing-library/react';

// speeds up *ByRole queries a bit
// https://github.com/testing-library/dom-testing-library/issues/552
configure({ defaultHidden: true });
