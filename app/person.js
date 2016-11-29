function Human (name, gender, height, skin_color){
this.name = name;
this.gender = gender;
this.height = height;
this.skin_color = skin_color;
}

Human.prototype.getage = function(yob) {
return (new Date().getFullYear() - yob);
};

function Doctor(name, gender, height, skin_color, field){
   Human.call(this, name, gender, height, skin_color);
   this.field = field;
}
Doctor.prototype = Object.create(Human.prototype);
Doctor.prototype.constructor = Doctor;
Doctor.prototype.years_of_experience = function(start_year) {
return (new Date().getFullYear() - start_year);
};