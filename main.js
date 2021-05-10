student_name_array = [];

function submit() 
{
 var display_student = [];
 for (var j = 1; j<= 4; j++); 
  {
    var name = document.getElementById( "name_of_the_student_" +j ).value;
    student_name_array.push (name);
  }
  console.log (student_name_array);

  var length_of_array = student_name_array.length;

  for (var k = 0; k < length_of_array; k++)
  {
      display_student.push ("<h3> Name - " + student_name_array[k] + "</h3>");
  }

  document.getElementById("display_name_with_commas").innerHTML = display_student;

  var remove_commas = display_student.join(" ");
  document.getElementById("display_name_without_commas").innerHTML = display_student;

  document.getElementById("submit_button").style.display = "none";
  document.getElementById("sort_button").style.display = "inline-block";
 }

 function sorting()
 {
   student_name_array.sort();
   
   var display_sorted_array = [];

   var length_of_array = student_name_array.length;

   for (var k = 0; k < length_of_array; k++)
  {
      display_sorted_array.push ("<h3> Name - " + student_name_array [k] + "</h3>");
  }

  var remove_commas = display_sorted_array.join(" ");
  document.getElementById("display_name_without_commas").innerHTML = remove_commas;
 }