      function btn() {
        var number = document.getElementById("number").value;
        var result = document.getElementById("p1");
        function myfac(number) {
          if (number === 0 || number === 1) {
            return 1;
          } else {
            return number * myfac(number - 1);
          }
        }

        result.innerHTML =
          "The factorial of " + number + " is: " + myfac(parseInt(number));
      }