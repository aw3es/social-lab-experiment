
/* create timeline */
var timeline = [];

// generate a random subject ID with 10 characters
var subject_id = jsPsych.randomization.randomID(10);

// pick a random condition for the subject at the start of the experiment
var condition_assignment = jsPsych.randomization.sampleWithoutReplacement(['close_condition', 'far_condition'], 1)[0];

jsPsych.data.addProperties({
    subject: subject_id,
    condition: condition_assignment
  });

var list = [];

var close_list = [
  -3, 2, 7, 9, 6, -6, 16, 21, -21, 10, 6, 22, 10, -10, -15, -10, -2, 5, -8, 8, -9, -8, 0, 4,
  -3, 15, -8, -14, 1, 6, 3, -2, 12, 1, -2, 7, 7, 8, 6, 12, 2, -15, -2, -14, -15, 8, 10, 0,
  11, -10, -9, -23, -7, -1, 3, -3, 10, 1, -7, 4, 6, 14, -5, 4, -15, 8, 3, 10, 24, -2, -3, -15,
  10, -18, 13, -20, 6, 1, -20, -12, 19, -12, -3, 21, 19, -13, 24, 4, -4, 8, 10, 5, 8, -7, 4, 0,
  -4, 14, 9, 4, -2, 15, 10, -6, -6, 8, -5, -20, -2, -18, -6, -6, 15, 0, 0, -10, -3, 0, -10, -11,
  2, -6, -20, 0, 3, 9, -4, 4, 7, -1, -9, 10, 7, 8, -11, 16, 4, 5, 2, 16, -1, 8, 14, -4,
  -6, 2, 0, -16, -2, -15, -12, -18, -1, 1, -20, 0, 1, 9, 11, 2, -7, -7, -19, 9, 12, -22, 1, 17,
  4, 3, -3, -5, 6, 7, 16, 0, 4, 1, -7, 10, 2, 13, -15, -11, 9, -9, 7, -12, 1, -3, 6, 10,
  -7, 2, 2, -6, 5, 12, 25, 1, -22, 11, -5, -1, 8, 12, -23, 0, 6, 2, 2, -4, -5, 8, 3, -10,
  12, 20, 1, -4, -3, 6, 11, 2, -21, 7, 11, 0, -13, -12, -16, 0, 4, 13, 9, -7, 7, 10, 11, 4,
  3, -12, 3, -26, 2, 26, -4, -3, 5, 15, -18, -20, -13, 0, 5, 8, 8, 8, -1, 14, -20, 17, -9, 2,
  -17, -13, 12, -8, 4, -15, -13, 3, -7, -9, -6, 8, -8, -2, 11, 7, 2, -4, -5, -4, -15, -10, -13, 12,
  12, 8, 8, -6, -13, 22, 4, -1, -4, 10, -17, 0, -9, 5, -10, 5, -3, -14, -1, 1, -26, -21, 5, 3,
  -14, 1, 4, 16, -16, 7, 1, -7, -11, -19, 22, 12, 0, 5, 0, 24, 3, -20, -6, 13, 1, 0, -7, 5,
  -17, 17, -14, -4, 4, -2, -4, 8, 19, 4, 9, -3, 4, -2, 11, -19, -3, 1, -8, -8, 8, 14, -10, 7,
  -13, -3, 12, -9, 10, 2, 1, 13, -29, -9, -1, 14, -5, -3, -6, -11, -18, 9, 7, 9, -8, -32, -16, -9,
  2, 1, 11, 16, 5, 14, -2, -5, 3, -21, 6, 3, 4, 26, -14, -4, -7, -3, 12, -16, 2, -1, 1, -17,
  -18, 6, 13, -1, 7, 8, 2, -9, -9, 3, -1, -14, -14, 3, -9, 1, 1, 6, 3, 6, -11, 7, -4, -5,
  20, -2, -11, -7, -20, 1, 14, -14, 2, 8, -23, 5, 17, 24, -9, 1, -8, -11, 2, 0, -8, 1, 23, 6,
  7, 2, -8, 1, 0, -15, -22, 10, 3, 10, -2, -3, 0, -5, 11, 24, -4, -16, -3, 10, -10, -6, 14, 3,
  -16, 1, -4, 3, 4, 4, -9, 11, -12, -2, -12, -12, 2, 18, -3, 7, 10, 6, -2, -7, 12, 4, 26, -15,
  29, -7, 27, 6, -7, 8, -16, 5, -19, 1, -15, -19, 7, -15, 6, 8, -5, 2, 12, -11, 0, -20, 3, 16,
  1, 9, 7, 17, -2, 13, -2, -6, -5, -17, 14, -7, -6, 4, -2, 13, 1, -18, 1, -9, -10, -2, -13, -3,
  11, 14, 15, -17, 5, -2, -8, -12, -1, -17, 2, -21, -17, 16, -6, -10, 1, 6, -3, -7, 6, 14, -1, -12,
  -1, -3, -3, 15, -16, 1, -9, -6, -2, 4, -17, -8, 8, -2, 6, 3, 1, -12, 2, -14, -1, -4, 25, -22,
  -3, 13, -6, 10, 3, 6, -11, 0, -2, 3, -19, 8, 5, 10, -11, -1, -7, -12, -2, 6, 2, -6, 6, -3,
  -2, 10, 14, 7, -2, 0, 13, 4, 0, 7, -9, -18, 12, -14, -6, -4, 1, -19, 2, -9, 0, -7, 14, -5,
  9, -1, -7, -7, -6, -11, -3, -9, 5, 13, -5, 6, 13, 4, -21, 0, -4, -17, -12, 15, 2, -5, 4, 5,
  -11, 14, 4, -3, -1, 13, 2, -11, -3, 13, -8, -3, -5, -3, -12, 11, -9, -3, 20, 7, 7, -12, -13, -11,
  9, 10, -16, -2, -12, 0, -5, -14, 3, -6, 2, -18, 0, 2, 8, 3, -10, -8, 2, 6, -14, -5, 14, 0,
  -1, 11, -14, 3, -12, 4, -19, -12, -2, 25, -10, 19, -14, 6, -2, -8, 6, -11, 5, -8, 14, 8, 0, 0,
  0, -4, -14, -8, 4, -4, 9, 5, 0, -1, -1, 8, -13, 12, 19, 3, -2, -1, -4, -7, -2, -4, 5, -16,
  -11, 0, 1, -3, 1, -5, -22, 4, -1, -4, -6, -4, 3, 19, 19, -3, 5, -7, -3, -1, 3, 9, -15, -15,
  0, 2, -5, 17, 6, 16, 2, -6, -6, -9, 3, -15, 1, 0, -17, 10, -6, 4, -10, -10, -2, -1, -7, 8,
  16, -11, -18, 4, 5, -11, -9, 10, 1, 18, 4, -8, -1, 4, -8, 16, 3, 20, 5, -7, -4, 6, -1, 20,
  -1, 13, 4, -5, 6, -9, -4, -5, -5, -4, -1, -15, -7, 5, 9, -9, -13, -6, 0, -13, -9, -13, -12, 8,
  -12, -10, 11, 19, -2, 8, -8, 14, -1, 11, -6, -15, 13, -19, -6, 7, -3, 7, -12, 12, -9, -6, 7, 17,
  5, -2, -3, 1, 7, 11, 6, -18, 1, -3, 25, 6, 4, 8, -4, -16, -2, -6, 0, 6, 0, 3, 15, -3,
  -7, 2, -10, 11, 19, -6, -4, 7, 16, 11, 14, 5, -1, 5, -12, -2, 5, 26, 5, 3, 15, -2, 1, 1,
  -16, 9, -12, -12, -1, 1, 14, -7, -15, -8, 12, -1, -15, 9, 4, 6, -6, -1, 4, -8, 4, 3, 10, 4,
  27, 10, 2, 11, 2, 7, 8, -5, 13, -7, 2, -5, 17, 0, -5, -1, -5, -4, -17, 0, 9, -4, -2, -13,
  -2,-10,3,1,7,-13,-5,-6,3,-15,11,-1,-5,5,-1,6
];

var far_list = [
  49,-7,9,14,8,0,-33,28,-24,-35,-1,31,-15,-7,13,6,31,31,0,28,-1,-21,-20,-1,-24,5,27,9,-7,-34,0,-9,-15,29,25,-18,8,6,35,-27,
  -36,-12,5,27,25,5,-29,18,10,6,12,-4,11,-15,22,19,29,-1,6,-5,16,4,-41,-16,25,14,-25,12,25,48,-24,-3,10,-9,9,-20,0,5,-9,-12,
  15,-37,-25,8,27,-32,-38,-24,-16,-6,-2,-2,4,7,32,17,-39,-1,3,6,-7,13,-5,42,16,33,16,-42,-6,19,18,17,-3,13,20,-9,-15,6,-2,10,
  -12,-40,34,-40,-6,4,-5,-12,-10,27,26,6,-20,-14,18,-37,7,6,-11,-2,8,-4,0,5,-4,-28,-3,-3,1,-7,20,36,6,1,19,6,20,9,14,22,
  -13,7,17,-3,-22,-16,-16,21,-1,6,23,8,-20,-7,6,-7,30,-28,31,-6,-25,-11,8,11,33,6,33,-7,-31,-18,-18,-10,2,14,-23,-3,-4,-7,
  -23,-3,34,-21,20,-26,7,2,2,-5,36,-14,30,-3,-2,28,1,-7,-11,10,-22,2,16,-22,15,32,-14,-6,-1,26,-19,-45,-20,18,-3,18,48,-29,
  -36,18,-41,19,-1,-29,22,-8,17,-11,23,7,43,-16,-1,9,9,-16,-36,31,28,-8,3,50,-8,-39,-15,5,17,9,9,-29,11,-10,-15,-7,6,-24,8,
  -16,27,-2,-9,-2,-24,33,27,-18,-5,-6,-7,22,9,8,32,1,-3,4,1,25,22,6,-18,-21,-31,-5,-19,-1,-34,4,-18,27,-28,4,8,22,14,-11,
  -51,-7,-38,-3,20,-20,11,-6,-23,-21,28,9,56,5,41,-11,29,1,-17,42,-8,-24,-11,1,30,2,-9,-44,18,33,5,-3,-6,-11,5,-19,-6,17,2,
  -8,24,-9,-12,43,37,-25,30,29,35,6,-1,13,-9,-8,26,-6,-34,28,20,-9,-4,22,-36,-20,-4,-1,7,-3,16,-10,-15,0,4,-6,32,-2,18,14,
  15,18,-14,21,34,21,-13,2,-3,14,-24,-19,6,-5,29,25,20,31,-7,-18,11,1,-2,6,9,-30,-8,-6,-35,-13,-16,-24,3,-30,1,37,8,34,-7,-10,
  -17,45,-7,-14,3,-22,1,7,-14,1,-40,27,-6,15,-7,9,-4,-3,22,-23,6,-1,22,3,-10,10,2,-18,-3,-24,-6,-11,5,19,8,5,32,4,28,9,
  25,32,-44,12,11,14,28,-7,-7,-15,13,-10,-15,25,10,-4,14,0,-15,-2,-13,-13,16,4,8,-43,-25,-3,3,-17,3,26,-5,-6,9,11,2,-1,2,-17,
  -3,-19,17,-13,-14,30,12,-1,-8,-12,-42,-11,-26,-3,6,-18,18,-12,-21,12,14,3,-15,10,-12,-26,-20,-10,-26,-1,4,15,27,-4,-24,18,-5,
  -10,14,-14,-16,-29,14,9,22,-28,32,-20,-2,9,34,31,-15,2,1,-28,-70,11,13,6,-4,-5,2,4,16,-32,-12,-24,-6,-31,-1,11,9,-14,29,13,
  -1,23,-1,-25,-5,-37,-11,12,3,-40,34,5,-27,8,-47,25,-7,26,-9,-16,-22,3,36,20,32,-35,28,-38,2,-8,9,41,-35,-5,5,-34,-14,-5,
  -16,2,-7,25,-30,21,-24,13,-5,12,5,-14,-5,-9,10,23,-43,1,9,-34,-28,2,-2,7,6,-27,33,15,15,-47,-24,17,0,-1,13,25,24,-3,-15,0,
  8,-2,-23,-20,4,4,21,-2,2,11,-25,0,19,1,2,31,20,-20,-10,-7,15,7,-12,-9,8,-25,-14,22,-12,1,-18,13,3,-27,-7,-9,-1,25,-37,32,
  1,-32,1,-10,31,24,-2,25,21,-17,35,9,-5,-21,-9,35,-7,34,41,-15,-1,9,-53,-7,-19,13,45,-11,-65,25,39,-24,-14,11,9,-26,7,-7,3,
  -12,-14,34,-19,3,-16,-1,-2,-21,13,-33,1,1,14,-8,5,-32,17,36,1,4,-15,-31,-11,16,3,-10,-7,4,-28,-6,27,23,-20,-4,-18,-17,-7,
  -10,21,10,9,-24,-1,-16,9,-35,-39,-21,24,45,-14,-45,15,-12,-24,-51,21,-40,21,-23,29,-10,-3,-10,22,53,-12,-52,27,-11,8,-22,
  -8,3,0,-20,2,14,-11,3,4,-2,31,-7,28,-2,21,2,-36,-16,24,21,14,-5,-8,-36,-47,36,18,-13,-14,32,-41,4,0,12,-13,-3,-26,16,-9,
  -19,34,-9,22,-5,-8,6,10,26,-48,-18,12,12,7,-7,5,29,-8,7,-2,-4,3,8,-10,4,-8,17,5,-8,11,13,-9,-15,16,-4,7,8,7,25,16,6,
  -48,-16,-5,-1,8,-26,-2,-5,-16,19,8,-18,8,6,20,-1,-29,9,-15,7,-5,5,-15,-12,3,6,-13,15,-1,5,32,-43,4,4,24,33,-6,-2,-28,
  2,1,34,-23,-1,17,38,12,-11,-27,42,15,13,15,-3,11,5,5,-3,24,10,55,56,-6,-24,-19,-21,5,18,1,-10,23,-34,9,-15,2,41,-25,-6,52,
  -10,-5,-25,-25,0,6,0,15,-19,15,-6,-22,4,-22,4,15,22,19,26,-31,-15,38,11
];

if (condition_assignment == "close_condition") { // close together condition
  list = close_list;
}
else { // spread apart condition - OR condition_assignment == "far_condition"
  list = far_list;
}


/* define welcome message trial */
var welcome_block = {
  type: "html-keyboard-response",
  stimulus: "Welcome to the experiment. Press any key to begin."
};
timeline.push(welcome_block);

/* define instructions trial */
var instructions = {
  type: "html-keyboard-response",
  stimulus: "insert instructions (press any key to begin)",
  post_trial_gap: 2000
};
timeline.push(instructions);

/* test trials */

var sorting_stimuli = ["red.png"];

var drag_trial = {
    type: "free-sort",
    stimuli: sorting_stimuli,
    stim_height: 8,
    stim_width: 8,
    sort_area_height: 530,
    sort_area_width: 800,
    prompt: "<p>Drag the red dot to where you believe Salt Lake City is on the map. Press continue.</p>",
};
timeline.push(drag_trial);
/* take x, y data from this */

var guess_1 = {
    type: "free-sort",
    stimuli: sorting_stimuli,
    stim_height: 8,
    stim_width: 8,
    sort_area_height: 530,
    sort_area_width: 800,
    prompt: "<p>Here is a colleague's guess! Press continue after you have viewed it. </p>",
    stim_initial_x: function(){
      var last_trial_x = jsPsych.data.get().last(1).values()[0].x;
      var random_noise = list[Math.floor(Math.random() * list.length)];
      if (last_trial_x <= 400) {
        return last_trial_x + 80 + random_noise;
      }
      else {
        return last_trial_x - (80 + random_noise);
      }
    },
    stim_initial_y: function(){
      var last_trial_y = jsPsych.data.get().last(1).values()[0].y;
      var random_noise = list[Math.floor(Math.random() * list.length)];
      if (last_trial_y <= 265) {
        return last_trial_y + 80 + random_noise;
      }
      else {
        return last_trial_y - (80 + random_noise);
      }
    }
  };
timeline.push(guess_1);

var guess_2 = {
    type: "free-sort",
    stimuli: sorting_stimuli,
    stim_height: 8,
    stim_width: 8,
    sort_area_height: 530,
    sort_area_width: 800,
    prompt: "<p>Here is another colleague's guess! Press continue after you have viewed it.</p>",
    stim_initial_x: function(){
      var last_trial_x = jsPsych.data.get().last(2).values()[0].x;
      var random_noise = list[Math.floor(Math.random() * list.length)];
      if (last_trial_x <= 400) {
        return last_trial_x + 80 + random_noise;
      }
      else {
        return last_trial_x - (80 + random_noise);
      }
    },
    stim_initial_y: function(){
      var last_trial_y = jsPsych.data.get().last(2).values()[0].y;
      var random_noise = list[Math.floor(Math.random() * list.length)];
      if (last_trial_y <= 265) {
        return last_trial_y + 80 + random_noise;
      }
      else {
        return last_trial_y - (80 + random_noise);
      }
    }
  };
timeline.push(guess_2);

var guess_3 = {
    type: "free-sort",
    stimuli: sorting_stimuli,
    stim_height: 8,
    stim_width: 8,
    sort_area_height: 530,
    sort_area_width: 800,
    prompt: "<p>Here is another colleague's guess! Press continue after you have viewed it.</p>",
    stim_initial_x: function(){
      var last_trial_x = jsPsych.data.get().last(3).values()[0].x;
      var random_noise = list[Math.floor(Math.random() * list.length)];
      if (last_trial_x <= 400) {
        return last_trial_x + 80 + random_noise;
      }
      else {
        return last_trial_x - (80 + random_noise);
      }
    },
    stim_initial_y: function(){
      var last_trial_y = jsPsych.data.get().last(3).values()[0].y;
      var random_noise = list[Math.floor(Math.random() * list.length)];
      if (last_trial_y <= 265) {
        return last_trial_y + 80 + random_noise;
      }
      else {
        return last_trial_y - (80 + random_noise);
      }
    }
  };
timeline.push(guess_3);

var guess_4 = {
    type: "free-sort",
    stimuli: sorting_stimuli,
    stim_height: 8,
    stim_width: 8,
    sort_area_height: 530,
    sort_area_width: 800,
    prompt: "<p>Here is another colleague's guess! Press continue after you have viewed it.</p>",
    stim_initial_x: function(){
      var last_trial_x = jsPsych.data.get().last(4).values()[0].x;
      var random_noise = list[Math.floor(Math.random() * list.length)];
      if (last_trial_x <= 400) {
        return last_trial_x + 80 + random_noise;
      }
      else {
        return last_trial_x - (80 + random_noise);
      }
    },
    stim_initial_y: function(){
      var last_trial_y = jsPsych.data.get().last(4).values()[0].y;
      var random_noise = list[Math.floor(Math.random() * list.length)];
      if (last_trial_y <= 265) {
        return last_trial_y + 80 + random_noise;
      }
      else {
        return last_trial_y - (80 + random_noise);
      }
    }
  };
timeline.push(guess_4);

var guess_5 = {
    type: "free-sort",
    stimuli: sorting_stimuli,
    stim_height: 8,
    stim_width: 8,
    sort_area_height: 530,
    sort_area_width: 800,
    prompt: "<p>Here is another colleague's guess! Press continue after you have viewed it.</p>",
    stim_initial_x: function(){
      var last_trial_x = jsPsych.data.get().last(5).values()[0].x;
      var random_noise = list[Math.floor(Math.random() * list.length)];
      if (last_trial_x <= 400) {
        return last_trial_x + 80 + random_noise;
      }
      else {
        return last_trial_x - (80 + random_noise);
      }
    },
    stim_initial_y: function(){
      var last_trial_y = jsPsych.data.get().last(5).values()[0].y;
      var random_noise = list[Math.floor(Math.random() * list.length)];
      if (last_trial_y <= 265) {
        return last_trial_y + 80 + random_noise;
      }
      else {
        return last_trial_y - (80 + random_noise);
      }
    }
  };
timeline.push(guess_5);

var guess_6 = {
    type: "free-sort",
    stimuli: sorting_stimuli,
    stim_height: 8,
    stim_width: 8,
    sort_area_height: 530,
    sort_area_width: 800,
    prompt: "<p>Here is another colleague's guess! Press continue after you have viewed it.</p>",
    stim_initial_x: function(){
      var last_trial_x = jsPsych.data.get().last(6).values()[0].x;
      var random_noise = list[Math.floor(Math.random() * list.length)];
      if (last_trial_x <= 400) {
        return last_trial_x + 80 + random_noise;
      }
      else {
        return last_trial_x - (80 + random_noise);
      }
    },
    stim_initial_y: function(){
      var last_trial_y = jsPsych.data.get().last(6).values()[0].y;
      var random_noise = list[Math.floor(Math.random() * list.length)];
      if (last_trial_y <= 265) {
        return last_trial_y + 80 + random_noise;
      }
      else {
        return last_trial_y - (80 + random_noise);
      }
    }
  };
timeline.push(guess_6);

var final_guess = {
    type: "free-sort",
    stimuli: sorting_stimuli,
    stim_height: 8,
    stim_width: 8,
    sort_area_height: 530,
    sort_area_width: 800,
    prompt: "<p>Again, drag the red dot to where you believe Salt Lake City is on the map. Press finish.</p>",
    button_label: "Finish"
};
timeline.push(final_guess);

function saveData(name, data){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'write_data.php'); // 'write_data.php' is the path to the php file described above.
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({filename: name, filedata: data})); // need different names
}

  // call the saveData function after the experiment is over
jsPsych.init({
    timeline: timeline,
    on_finish: function(){ saveData("experiment_data", jsPsych.data.get().csv()); }
});

/* timeline.push({
  type: 'call-function',
  func: saveData() // does this work??
});

/* start the experiment */
/* jsPsych.init({
  timeline: timeline,
  on_finish: function(){jsPsych.data.displayData();} // can be JSON or CSV -- which is better for our situation??
}); */
