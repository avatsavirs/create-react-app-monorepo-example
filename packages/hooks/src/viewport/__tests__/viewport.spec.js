import { renderHook } from '@testing-library/react-hooks';
import view from 'react-intersection-observer';
import * as viewport from '../viewport';

describe('Unit test cases for viewport module', () => {
  describe('test cases for useOnceInView function', () => {
    it('should return hasShownElement true  when it element in view', () => {
      const spy = jest.spyOn(view, 'useInView').mockReturnValue([{}, true, {}]);
      const { result } = renderHook(() => viewport.useOnceInView());
      expect(result).toMatchInlineSnapshot(`
        Object {
          "current": Object {
            "domRef": Object {
              "current": undefined,
            },
            "entry": Object {},
            "hasShownElement": true,
            "inView": true,
            "ref": [Function],
          },
          "error": undefined,
        }
      `);
      expect(spy).toHaveBeenCalledTimes(2);
    });

    it('should return hasShownElement false  when it element in view', () => {
      const spy = jest
        .spyOn(view, 'useInView')
        .mockReturnValue([{}, false, {}]);
      const { result } = renderHook(() => viewport.useOnceInView());
      expect(result).toMatchInlineSnapshot(`
        Object {
          "current": Object {
            "domRef": Object {
              "current": undefined,
            },
            "entry": Object {},
            "hasShownElement": false,
            "inView": false,
            "ref": [Function],
          },
          "error": undefined,
        }
      `);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should change the hasShownElement state based on if its in view', async () => {
      const spy = jest
        .spyOn(view, 'useInView')
        .mockReturnValue([{}, false, {}]);
      const { result, rerender } = renderHook(() => viewport.useOnceInView());
      expect(result).toMatchInlineSnapshot(`
        Object {
          "current": Object {
            "domRef": Object {
              "current": undefined,
            },
            "entry": Object {},
            "hasShownElement": false,
            "inView": false,
            "ref": [Function],
          },
          "error": undefined,
        }
      `);
      spy.mockReturnValue([{}, true, {}]);
      await rerender();
      expect(result).toMatchInlineSnapshot(`
        Object {
          "current": Object {
            "domRef": Object {
              "current": undefined,
            },
            "entry": Object {},
            "hasShownElement": true,
            "inView": true,
            "ref": [Function],
          },
          "error": undefined,
        }
      `);
    });

    it('should always return  hasShownElement true if element goes in and out of the viewport', async () => {
      const spy = jest
        .spyOn(view, 'useInView')
        .mockReturnValue([{}, false, {}]);
      const { result, rerender } = renderHook(() => viewport.useOnceInView());
      expect(result).toMatchInlineSnapshot(`
        Object {
          "current": Object {
            "domRef": Object {
              "current": undefined,
            },
            "entry": Object {},
            "hasShownElement": false,
            "inView": false,
            "ref": [Function],
          },
          "error": undefined,
        }
      `);
      spy.mockReturnValue([{}, true, {}]);
      await rerender();
      expect(result).toMatchInlineSnapshot(`
        Object {
          "current": Object {
            "domRef": Object {
              "current": undefined,
            },
            "entry": Object {},
            "hasShownElement": true,
            "inView": true,
            "ref": [Function],
          },
          "error": undefined,
        }
      `);
      spy.mockReturnValue([{}, false, {}]);
      await rerender();
      expect(result).toMatchInlineSnapshot(`
        Object {
          "current": Object {
            "domRef": Object {
              "current": undefined,
            },
            "entry": Object {},
            "hasShownElement": true,
            "inView": false,
            "ref": [Function],
          },
          "error": undefined,
        }
      `);
    });
  });
});
