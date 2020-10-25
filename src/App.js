import React, { useState } from "react";
import { Button } from "react-bootstrap";
import mallardDuck from "./images/mallard.png";
import toyDuck from "./images/toy.png";
import woodDuck from "./images/wood.png";
import whiteDuck from "./images/white.png";
import quackSound from "./music/Duck-quack.mp3";
import squeakSound from "./music/squeaky-toy-sound.mp3";

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
    return <p>I can Fly</p>;
  };
}

class NoFly extends FlyBehaviour {
  fly = () => {
    return <p>I cannot Fly</p>;
  };
}

class QuackSound extends QuackBehaviour {
  quack = () => {
    console.log("I can quack quack");
    return <p>Quack Quack</p>;
  };
}

class SqueakSound extends QuackBehaviour {
  quack = () => {
    return <p>Squeak Squeak</p>;
  };
}

class SilentSound extends QuackBehaviour {
  quack = () => {
    return <p></p>;
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
  constructor(props) {
    super();
    this.state = {
      canFly: false,
      canQuack: false,
      quackSound: new Audio(quackSound),
    };
  }

  quack = () => {
    const quack = new QuackSound();
    return quack.quack();
  };

  fly = () => {
    const fly = new FlyWings();
    return fly.fly();
  };

  render() {
    return (
      <div className="duck">
        <img
          className={`image ${this.state.canFly ? "canFly" : ""}`}
          src={mallardDuck}
          alt="mallardDuck"
          onAnimationEnd={() => {
            this.setState({ canFly: false });
          }}
        />
        <Button
          className="eventButton"
          onClick={(event) => {
            event.preventDefault();
            this.setState({ canFly: true });
          }}
        >
          Fly
        </Button>
        <Button
          className="eventButton"
          onClick={(event) => {
            event.preventDefault();
            this.setState({ canQuack: true });
            this.state.quackSound.play();
          }}
        >
          Quack
        </Button>
        {this.state.canQuack ? this.quack() : null}
        {this.state.canFly ? this.fly() : null}
      </div>
    );
  }
}

class WhiteDuck extends Duck {
  constructor(props) {
    super();
    this.state = {
      canFly: false,
      canQuack: false,
      quackSound: new Audio(quackSound),
    };
  }
  quack = () => {
    const quack = new QuackSound();
    return quack.quack();
  };

  fly = () => {
    const fly = new FlyWings();
    return fly.fly();
  };

  render() {
    return (
      <div className="duck">
        <img
          className={`image ${this.state.canFly ? "canFly" : ""}`}
          onAnimationEnd={() => {
            this.setState({ canFly: false });
          }}
          src={whiteDuck}
          alt="whiteDuck"
        />
        <Button
          className="eventButton"
          onClick={(event) => {
            event.preventDefault();
            this.setState({ canFly: true });
          }}
        >
          Fly
        </Button>
        <Button
          className="eventButton"
          onClick={(event) => {
            event.preventDefault();
            this.setState({ canQuack: true });
            this.state.quackSound.play();
          }}
        >
          Quack
        </Button>
        {this.state.canQuack ? this.quack() : null}
        {this.state.canFly ? this.fly() : null}
      </div>
    );
  }
}

class WoodDuck extends Duck {
  constructor(props) {
    super();
    this.state = {
      canFly: false,
      canQuack: false,
    };
  }
  quack = () => {
    const quack = new SilentSound();
    return quack.quack();
  };

  fly = () => {
    const fly = new NoFly();
    return fly.fly();
  };

  render() {
    return (
      <div className="duck">
        <img className="image" src={woodDuck} alt="woodDuck" />
        <Button
          className="eventButton"
          onClick={(event) => {
            event.preventDefault();
            this.setState({ canFly: true });
          }}
        >
          Fly
        </Button>
        <Button
          className="eventButton"
          onClick={(event) => {
            event.preventDefault();
            this.setState({ canQuack: true });
          }}
        >
          Quack
        </Button>
        {this.state.canQuack ? this.quack() : null}
        {this.state.canFly ? this.fly() : null}
      </div>
    );
  }
}

class ToyDuck extends Duck {
  constructor(props) {
    super();
    this.state = {
      canFly: false,
      canQuack: false,
      squeakSound: new Audio(squeakSound),
    };
  }
  quack = () => {
    const quack = new SqueakSound();
    return quack.quack();
  };

  fly = () => {
    const fly = new NoFly();
    return fly.fly();
  };

  render() {
    return (
      <div className="duck">
        <img className="image" src={toyDuck} alt="toyDuck" />
        <Button
          className="eventButton"
          onClick={(event) => {
            event.preventDefault();
            this.setState({ canFly: true });
          }}
        >
          Fly
        </Button>
        <Button
          className="eventButton"
          onClick={(event) => {
            event.preventDefault();
            this.setState({ canQuack: true });
            this.state.squeakSound.play();
          }}
        >
          Quack
        </Button>
        {this.state.canQuack ? this.quack() : null}
        {this.state.canFly ? this.fly() : null}
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
      <h1 style={{ fontSize: "400%" }}>SDP Assignment 1</h1>
      <h1 style={({ fontSize: "300%" }, { fontWeight: "bold" })}>Group-23</h1>
      <h1 style={({ fontSize: "300%" }, { fontWeight: "bold" })}>
        This Project is Powered By React JS
      </h1>
      <h1 style={{ fontSize: "300%" }}>Welcome to Sim U Duck !</h1>
      <h2 style={{ fontSize: "250%" }}>Choose your type of duck</h2>
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
