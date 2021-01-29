import { renderHook, act } from "@testing-library/react-hooks";
import useDarkMode from "../src/useDarkMode";

test("toggle dark mode", () => {
  const { result } = renderHook(() => useDarkMode());
  expect(result.current.isDarkMode).toBe(false);
  act(() => {
    result.current.toggleDarkMode();
  });
  expect(result.current.isDarkMode).toBe(true);
  act(() => {
    result.current.toggleDarkMode();
  });
  expect(result.current.isDarkMode).toBe(false);
});
