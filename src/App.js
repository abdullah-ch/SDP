import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import mallardDuck from "./images/mallard.png";
import toyDuck from "./images/toy.png";
import woodDuck from "./images/wood.png";
import whiteDuck from "./images/white.png";
import quackSound from "./music/Duck-quack.mp3";
import squeakSound from "./music/squeaky-toy-sound.mp3";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class FlyBehaviour {
  fly = () => {
    // abstract
  };
}

class QuackBehaviour {
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
  QuackSound = () => {
    return this.props.QuackSound;
  };

  FlyWings = () => {
    return this.props.FlyWings;
  };
  NoFly = () => {
    return this.props.NoFly;
  };
  SqueakSound = () => {
    return this.props.SqueakSound;
  };
  QuackSound = () => {};
  SilentSound = () => {
    return this.props.SilentSound;
  };
}

class MallardDuck extends Duck {
  constructor(props) {
    super();
    this.state = {
      canFly: false,
      canNoFly: false,
      canQuack: false,
      canSqueak: false,
      isSilent: false,
      quackSound: new Audio(quackSound),
      squeakSound: new Audio(squeakSound),
      apiData: [],
    };
  }

  componentDidMount = async () => {
    let { data } = await axios.get(`http://localhost:5000/ducks`);
    this.setState({
      apiData: data,
    });

    console.log(this.state.apiData);
  };

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
  squeak = () => {
    const quack = new SqueakSound();
    return quack.quack();
  };

  noFly = () => {
    const fly = new NoFly();
    return fly.fly();
  };

  silent = () => {
    const quack = new SilentSound();
    return quack.quack();
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
        {this.state.apiData.flyWithWings ? (
          <Button
            className="eventButton"
            onClick={(event) => {
              event.preventDefault();
              this.setState({ canFly: true });
            }}
          >
            Fly
          </Button>
        ) : null}

        {this.state.apiData.quack ? (
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
        ) : null}

        {this.state.apiData.squeak ? (
          <Button
            className="eventButton"
            onClick={(event) => {
              event.preventDefault();
              this.setState({ canSqueak: true });
              this.state.squeakSound.play();
            }}
          >
            Squeak
          </Button>
        ) : null}

        {this.state.apiData.silent ? (
          <Button
            className="eventButton"
            onClick={(event) => {
              event.preventDefault();
              this.setState({ isSilent: true });
            }}
          >
            Silent
          </Button>
        ) : null}

        {this.state.apiData.noFly ? (
          <Button
            className="eventButton"
            onClick={(event) => {
              event.preventDefault();
              this.setState({ canNoFly: true });
            }}
          >
            No Fly
          </Button>
        ) : null}

        {this.state.canQuack ? this.quack() : null}
        {this.state.canFly ? this.fly() : null}
        {this.state.canSqueak ? this.squeak() : null}
        {this.state.isSilent ? this.silent() : null}
        {this.state.canNoFly ? this.noFly() : null}
      </div>
    );
  }
}

class WhiteDuck extends Duck {
  constructor(props) {
    super();
    this.state = {
      canFly: false,
      canNoFly: false,
      canQuack: false,
      canSqueak: false,
      isSilent: false,
      quackSound: new Audio(quackSound),
      squeakSound: new Audio(squeakSound),
      apiData: [],
    };
  }

  componentDidMount = async () => {
    let { data } = await axios.get(`http://localhost:5000/ducks`);
    this.setState({
      apiData: data,
    });

    console.log(this.state.apiData);
  };

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
  squeak = () => {
    const quack = new SqueakSound();
    return quack.quack();
  };

  noFly = () => {
    const fly = new NoFly();
    return fly.fly();
  };

  silent = () => {
    const quack = new SilentSound();
    return quack.quack();
  };
  render() {
    return (
      <div className="duck">
        <img
          className={`image ${this.state.canFly ? "canFly" : ""}`}
          src={whiteDuck}
          alt="whiteDuck"
          onAnimationEnd={() => {
            this.setState({ canFly: false });
          }}
        />
        {this.state.apiData.flyWithWings ? (
          <Button
            className="eventButton"
            onClick={(event) => {
              event.preventDefault();
              this.setState({ canFly: true });
            }}
          >
            Fly
          </Button>
        ) : null}

        {this.state.apiData.quack ? (
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
        ) : null}

        {this.state.apiData.squeak ? (
          <Button
            className="eventButton"
            onClick={(event) => {
              event.preventDefault();
              this.setState({ canSqueak: true });
              this.state.squeakSound.play();
            }}
          >
            Squeak
          </Button>
        ) : null}

        {this.state.apiData.silent ? (
          <Button
            className="eventButton"
            onClick={(event) => {
              event.preventDefault();
              this.setState({ isSilent: true });
            }}
          >
            Silent
          </Button>
        ) : null}

        {this.state.apiData.noFly ? (
          <Button
            className="eventButton"
            onClick={(event) => {
              event.preventDefault();
              this.setState({ canNoFly: true });
            }}
          >
            No Fly
          </Button>
        ) : null}

        {this.state.canQuack ? this.quack() : null}
        {this.state.canFly ? this.fly() : null}
        {this.state.canSqueak ? this.squeak() : null}
        {this.state.isSilent ? this.silent() : null}
        {this.state.canNoFly ? this.noFly() : null}
      </div>
    );
  }
}

class WoodDuck extends Duck {
  constructor(props) {
    super();
    this.state = {
      canFly: false,
      canNoFly: false,
      canQuack: false,
      canSqueak: false,
      isSilent: false,
      quackSound: new Audio(quackSound),
      squeakSound: new Audio(squeakSound),
      apiData: [],
    };
  }

  componentDidMount = async () => {
    let { data } = await axios.get(`http://localhost:5000/ducks`);
    this.setState({
      apiData: data,
    });

    console.log(this.state.apiData);
  };

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
  squeak = () => {
    const quack = new SqueakSound();
    return quack.quack();
  };

  noFly = () => {
    const fly = new NoFly();
    return fly.fly();
  };

  silent = () => {
    const quack = new SilentSound();
    return quack.quack();
  };
  render() {
    return (
      <div className="duck">
        <img
          className={`image ${this.state.canFly ? "canFly" : ""}`}
          src={woodDuck}
          alt="woodDuck"
          onAnimationEnd={() => {
            this.setState({ canFly: false });
          }}
        />
        {this.state.apiData.flyWithWings ? (
          <Button
            className="eventButton"
            onClick={(event) => {
              event.preventDefault();
              this.setState({ canFly: true });
            }}
          >
            Fly
          </Button>
        ) : null}

        {this.state.apiData.quack ? (
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
        ) : null}

        {this.state.apiData.squeak ? (
          <Button
            className="eventButton"
            onClick={(event) => {
              event.preventDefault();
              this.setState({ canSqueak: true });
              this.state.squeakSound.play();
            }}
          >
            Squeak
          </Button>
        ) : null}

        {this.state.apiData.silent ? (
          <Button
            className="eventButton"
            onClick={(event) => {
              event.preventDefault();
              this.setState({ isSilent: true });
            }}
          >
            Silent
          </Button>
        ) : null}

        {this.state.apiData.noFly ? (
          <Button
            className="eventButton"
            onClick={(event) => {
              event.preventDefault();
              this.setState({ canNoFly: true });
            }}
          >
            No Fly
          </Button>
        ) : null}

        {this.state.canQuack ? this.quack() : null}
        {this.state.canFly ? this.fly() : null}
        {this.state.canSqueak ? this.squeak() : null}
        {this.state.isSilent ? this.silent() : null}
        {this.state.canNoFly ? this.noFly() : null}
      </div>
    );
  }
}

class ToyDuck extends Duck {
  constructor(props) {
    super();
    this.state = {
      canFly: false,
      canNoFly: false,
      canQuack: false,
      canSqueak: false,
      isSilent: false,
      quackSound: new Audio(quackSound),
      squeakSound: new Audio(squeakSound),
      apiData: [],
    };
  }

  componentDidMount = async () => {
    let { data } = await axios.get(`http://localhost:5000/ducks`);
    this.setState({
      apiData: data,
    });

    console.log(this.state.apiData);
  };

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
  squeak = () => {
    const quack = new SqueakSound();
    return quack.quack();
  };

  noFly = () => {
    const fly = new NoFly();
    return fly.fly();
  };

  silent = () => {
    const quack = new SilentSound();
    return quack.quack();
  };
  render() {
    return (
      <div className="duck">
        <img
          className={`image ${this.state.canFly ? "canFly" : ""}`}
          src={toyDuck}
          alt="toyDuck"
          onAnimationEnd={() => {
            this.setState({ canFly: false });
          }}
        />
        {this.state.apiData.flyWithWings ? (
          <Button
            className="eventButton"
            onClick={(event) => {
              event.preventDefault();
              this.setState({ canFly: true });
            }}
          >
            Fly
          </Button>
        ) : null}

        {this.state.apiData.quack ? (
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
        ) : null}

        {this.state.apiData.squeak ? (
          <Button
            className="eventButton"
            onClick={(event) => {
              event.preventDefault();
              this.setState({ canSqueak: true });
              this.state.squeakSound.play();
            }}
          >
            Squeak
          </Button>
        ) : null}

        {this.state.apiData.silent ? (
          <Button
            className="eventButton"
            onClick={(event) => {
              event.preventDefault();
              this.setState({ isSilent: true });
            }}
          >
            Silent
          </Button>
        ) : null}

        {this.state.apiData.noFly ? (
          <Button
            className="eventButton"
            onClick={(event) => {
              event.preventDefault();
              this.setState({ canNoFly: true });
            }}
          >
            No Fly
          </Button>
        ) : null}

        {this.state.canQuack ? this.quack() : null}
        {this.state.canFly ? this.fly() : null}
        {this.state.canSqueak ? this.squeak() : null}
        {this.state.isSilent ? this.silent() : null}
        {this.state.canNoFly ? this.noFly() : null}
      </div>
    );
  }
}
const App = () => {
  const [mallardDuckList, setMallardDuckList] = useState([]);
  const [woodDuckList, setWoodDuckList] = useState([]);
  const [whiteDuckList, setWhiteDuckList] = useState([]);
  const [toyDuckList, setToyDuckList] = useState([]);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    apiDataa();
  });

  const apiDataa = async () => {
    const { data } = await axios.get(`http://localhost:5000/ducks`);
    setApiData(data);
  };
  return (
    <div className="main">
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

      <h1 className="behaviour"> Behaviour Available for the Ducks</h1>
      <div className="behaviour">
        {apiData.noFly ? <h1 className="apiData">{apiData.noFly}</h1> : null}
        {apiData.flyWithWings ? (
          <h1 className="apiData">{apiData.flyWithWings}</h1>
        ) : null}
        {apiData.quack ? <h1 className="apiData">{apiData.quack}</h1> : null}
        {apiData.squeak ? <h1 className="apiData">{apiData.squeak}</h1> : null}
        {apiData.silent ? <h1 className="apiData">{apiData.silent}</h1> : null}
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
