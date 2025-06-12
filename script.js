function chooseOption(direction) {
      const story = document.getElementById("story");
      if (direction === 'left') {
        story.innerHTML = "You walk into the swamp. The swamp is silent... until something moves. A shadow approaches.";
      } else if (direction === 'right') {
        story.innerHTML = "You continue into the forest. A path leads down to a simple cottage.";
      }
      // change the photo to the back ground 
    }