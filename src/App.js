import React, { useState } from "react";
import { Button } from "react-bootstrap";
import mallardDuck from "./images/mallard.png";
import toyDuck from "./images/toy.png";
import woodDuck from "./images/wood.png";
import whiteDuck from "./images/white.png";
import react from "./images/react.png";
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
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  quack = () => {
    console.log("Quacking");
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
  constructor(props) {
    super(props);
    console.log("bruh", this.props);
  }

  QuackSound = () => {
    return this.props.QuackSound;
  };

  // FlyWings = () => {
  //   return this.props.FlyWings;
  // };
  // NoFly = () => {
  //   return this.props.NoFly;
  // };
  // SqueakSound = () => {
  //   return this.props.SqueakSound;
  // };
  // QuackSound = () => {};
  // SilentSound = () => {
  //   return this.props.SilentSound;
  // };
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
    // const quack = new Duck();
    // return quack.QuackSound();
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
    <div className="main">
      <h1 className="heading1">SDP Assignment 1</h1>
      <h1 className="heading2">Group-23</h1>
      <div className="react">
        <h1>This Project is Powered By</h1>
        <img src={react} alt="react" />
      </div>
      <h2 className="heading3">
        {" "}
        Welcome to Sim U Duck. Choose your type of Duck !
      </h2>
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
