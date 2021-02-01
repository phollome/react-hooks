import { renderHook, act } from "@testing-library/react-hooks";
import useDarkMode from "../src/useDarkMode";

test("toggle dark mode", () => {
  const setItemSpy = jest.spyOn(window.localStorage.__proto__, "setItem");
  const getItemSpy = jest.spyOn(window.localStorage.__proto__, "getItem");
  const removeItemSpy = jest.spyOn(window.localStorage.__proto__, "removeItem");
  const { result } = renderHook(() => useDarkMode());
  expect(result.current.isDarkMode).toBe(false);
  expect(getItemSpy).toBeCalledWith("darkModeEnabled");
  act(() => {
    result.current.toggleDarkMode();
  });
  expect(setItemSpy).toBeCalledWith("darkModeEnabled", true);
  expect(result.current.isDarkMode).toBe(true);
  act(() => {
    result.current.toggleDarkMode();
  });
  expect(removeItemSpy).nthCalledWith(2, "darkModeEnabled");
  expect(result.current.isDarkMode).toBe(false);
});
