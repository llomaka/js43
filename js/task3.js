// todo Площадь прямоугольника
/*
 * Напиши функцию getRectArea(dimensions) для вычисления площади прямоугольника со сторонами, значения которых будут переданы в параметр dimensions в виде строки. Значения гарантированно разделены пробелом.
 */

function getRectArea(dimensions) {
    const arr = dimensions.split(' ');
    return arr[0] * arr[1];
}

console.log(getRectArea('8 11'));