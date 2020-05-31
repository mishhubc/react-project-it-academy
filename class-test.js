function AnimalProto(props) {
  this.name = props.name;
}

AnimalProto.prototype = {
  bark: function () {
    console.log('AnimalProto.prototype.bark', this.name);
  },
};

function DogProto(props) {
  AnimalProto.call(this, props);

  this.furColor = props.furColor;
}

DogProto.prototype = Object.create(AnimalProto.prototype);
DogProto.prototype.showFur = function () {
  console.log('DogProto > fur is ', this.furColor);
};

class DogClass extends AnimalProto {
  furColor = 'none';

  constructor(props) {
    super(props);
    console.log('this.furColor before', this.furColor);
    this.furColor = props.furColor;
    console.log('this.furColor after', this.furColor);
  }

  showFur() {
    console.log('DogClass > fur is ', this.furColor);
  }
}

const protoDog = new DogProto({
  name: 'Pluto',
  furColor: 'brown',
});

const classDog = new DogClass({
  name: 'Lessie',
  furColor: 'gold',
});

console.log(protoDog, protoDog.bark());
console.log(classDog, classDog.bark());
