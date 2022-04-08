import { renderHook} from "@testing-library/react-hooks";
import useCalculator from "../../hooks/useCalculator";

test('should substract',() => {
      const { result } = renderHook(() => useCalculator());
      const { substraction } = result.current; 
      expect(substraction('4','2')).toEqual("2");
})

test('should add',() => {
    const { result } = renderHook(() => useCalculator());
    const { addition } = result.current; 
    expect(addition('4','2')).toEqual("6");
})

test('should divide',() => {
    const { result } = renderHook(() => useCalculator());
    const { division } = result.current; 
    expect(division('4','2')).toEqual("2");
})

test('should modulo',() => {
    const { result } = renderHook(() => useCalculator());
    const { modulo } = result.current; 
    expect(modulo('5','3')).toEqual("2");
})

test('should square',() => {
    const { result } = renderHook(() => useCalculator());
    const { square } = result.current; 
    expect(square('25')).toEqual("5");
})