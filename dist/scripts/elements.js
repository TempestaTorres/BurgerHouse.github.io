
function elTranslate(element, posX, posY) {
    element.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
}

function elInsertAfter(target, newElement) {
    target.parentNode.insertBefore(newElement, target.nextSibling);
}

function elInsertElement(target, newElement) {
    target.appendChild(newElement);
}

function elRemoveElement(element) {
    element.parentNode.removeChild(element);
}
/* Example:
const styles = getElementStyles(h1Element);

    h1Element.style.color = 'blue';

    setTimeout(() => {
        h1Element.style.color = styles.color;
    }, 3000);
*/

function elGetElementStyles(element) {
    // Get computed styles of the element
    const computedStyles = window.getComputedStyle(element);
    const styles = {};

    // Iterate through all computed styles and store them in an object
    for (let i = 0; i < computedStyles.length; i++) {
        const property = computedStyles[i];
        styles[property] = computedStyles.getPropertyValue(property);
    }

    return styles;
}
// Recursively finds the closest parent that has the specified class
/* Example:
const formGroup = closestParent(input.parentNode, "form-group")*/
function elClosestParent(child, className) {
    if (!child || child === document) {
        return null;
    }
    if (child.classList.contains(className)) {
        return child;
    } else {
        return elClosestParent(child.parentNode, className);
    }
}