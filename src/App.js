import React, { useState } from "react";
import { Button } from "react-bootstrap";
import mallardDuck from "./images/mallard.png";
import toyDuck from "./images/toy.png";
import woodDuck from "./images/wood.png";
import whiteDuck from "./images/white.png";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class FlyBehaviour extends React.Component {
  fly = () => {
    // abstract
  };
}

class QuackBehaviour extends React.Component {
  quack = () => {
    // abstract
  };
}

class FlyWings extends FlyBehaviour {
  fly = () => {
    return alert("This duck can Fly !");
  };
}

class NoFly extends FlyBehaviour {
  fly = () => {
    return alert("This Duck cannot Fly!");
  };
}

class QuackSound extends QuackBehaviour {
  quack = () => {
    return alert("Quack Quack !");
  };
}

class SqueakSound extends QuackBehaviour {
  quack = () => {
    return alert("Squeak Squeak !");
  };
}

class SilentSound extends QuackBehaviour {
  quack = () => {
    return alert("I am a Silent Duck !");
  };
}

class Duck extends React.Component {
  /*constructor(){
        //Javascript doesn't have datatypes as such
        //otherwise these would have been
        //QuackBehavior q;
        //Flybehavior f;
        let q;//for quack
        let f;//for fly
    }*/
  render() {
    return;
  }
}

class MallardDuck extends Duck {
  quack = () => {
    const quack = new QuackSound();
    quack.quack();
  };

  fly = () => {
    const fly = new FlyWings();
    fly.fly();
  };

  render() {
    return (
      <div>
        <img className="image" src={mallardDuck} alt="mallardDuck" />
        <Button
          onClick={(event) => {
            event.preventDefault();
            this.fly();
          }}
        >
          Fly
        </Button>
        <Button
          onClick={(event) => {
            event.preventDefault();
            this.quack();
          }}
        >
          Quack
        </Button>
      </div>
    );
  }
}

class WhiteDuck extends Duck {
  quack = () => {
    const quack = new QuackSound();
    quack.quack();
  };

  fly = () => {
    const fly = new FlyWings();
    fly.fly();
  };

  render() {
    return (
      <div>
        <img className="image" src={whiteDuck} alt="whiteDuck" />
        <Button
          onClick={(event) => {
            event.preventDefault();
            this.fly();
          }}
        >
          Fly
        </Button>
        <Button
          onClick={(event) => {
            event.preventDefault();
            this.quack();
          }}
        >
          Quack
        </Button>
      </div>
    );
  }
}

class WoodDuck extends Duck {
  quack = () => {
    const quack = new SilentSound();
    quack.quack();
  };

  fly = () => {
    const fly = new NoFly();
    fly.fly();
  };

  render() {
    return (
      <div>
        <img className="image" src={woodDuck} alt="woodDuck" />
        <Button
          onClick={(event) => {
            event.preventDefault();
            this.fly();
          }}
        >
          Fly
        </Button>
        <Button
          onClick={(event) => {
            event.preventDefault();
            this.quack();
          }}
        >
          Quack
        </Button>
      </div>
    );
  }
}

class ToyDuck extends Duck {
  quack = () => {
    const quack = new SqueakSound();
    quack.quack();
  };

  fly = () => {
    const fly = new NoFly();
    fly.fly();
  };

  render() {
    return (
      <div>
        <img className="image" src={toyDuck} alt="toyDuck" />
        <Button
          onClick={(event) => {
            event.preventDefault();
            this.fly();
          }}
        >
          Fly
        </Button>
        <Button
          onClick={(event) => {
            event.preventDefault();
            this.quack();
          }}
        >
          Quack
        </Button>
      </div>
    );
  }
}
const App = () => {
  const [mallardDuckList, setMallardDuckList] = useState([]);
  const [woodDuckList, setWoodDuckList] = useState([]);
  const [whiteDuckList, setWhiteDuckList] = useState([]);
  const [toyDuckList, setToyDuckList] = useState([]);

  return (
    <div>
      <h1>Welcome to Sim U Duck !</h1>
      <h2>Choose your type of duck</h2>
      <div className="menu">
        <Button
          className="buttoom"
          onClick={(event) => {
            event.preventDefault();
            setMallardDuckList(
              mallardDuckList.concat(
                <MallardDuck key={mallardDuckList.length} />
              )
            );
          }}
        >
          Mallard Duck
        </Button>
        <Button
          className="buttoom"
          onClick={(event) => {
            event.preventDefault();
            setWhiteDuckList(
              whiteDuckList.concat(<WhiteDuck key={whiteDuckList.length} />)
            );
          }}
        >
          White Duck
        </Button>
        <Button
          className="buttoom"
          onClick={(event) => {
            event.preventDefault();
            setToyDuckList(
              toyDuckList.concat(<ToyDuck key={mallardDuckList.length} />)
            );
          }}
        >
          Toy Duck
        </Button>
        <Button
          className="buttoom"
          onClick={(event) => {
            event.preventDefault();
            setWoodDuckList(
              woodDuckList.concat(<WoodDuck key={woodDuckList.length} />)
            );
          }}
        >
          Wood Duck
        </Button>
      </div>
      <div className="container">
        <div className="mallardDuck">
          {mallardDuckList.map((mallardDduck, index) => mallardDduck)}
        </div>
        <div className="woodDuck">
          {woodDuckList.map((woodDduck, index) => woodDduck)}
        </div>
        <div className="whiteDuck">
          {whiteDuckList.map((whiteDduck, index) => whiteDduck)}
        </div>
        <div className="toyDuck">
          {toyDuckList.map((toyDduck, index) => toyDduck)}
        </div>
      </div>
    </div>
  );
};

export default App;
