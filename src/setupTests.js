// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// react-router 7 expects TextEncoder, which Jest 27's jsdom lacks.
import { TextEncoder, TextDecoder } from 'util';
Object.assign(global, { TextEncoder, TextDecoder });

// jsdom doesn't implement scrolling; App's ScrollManager calls it on every route.
window.scrollTo = () => {};
