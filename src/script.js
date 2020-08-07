(function () {
  'use strict';
  /**
   * 
   * @param {string} string 
   * @param {point} point 
   */
  function sumPointStr(string, point) {

    // Pointer
    let i = 0;

    // Find position a words on text
    let position = string.indexOf(point);

    while(position !== -1) {

      // Find the position of the character while the position value is not equal to -1.
      // -1 is a sign that the character searched does not find its position.

      i++;
      position = string.indexOf(point, position + 1);
    }

    // Returns the search value for the number of character positions.
    return `There were as many "${point}" ${i}x as found.`;

  }

  // Show results.
  // Remember, the character case that will be searched for the number of positions will be considered different.
  // The characters a and A are considered different.

  console.log(sumPointStr('You love him but unfortunately he does not love you.', 'love'));
  // document.getElementById('content').innerHTML = sumPointStr('You love him but unfortunately he does not love you.', 'love');
}());
