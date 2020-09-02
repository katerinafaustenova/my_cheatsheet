export const CodeHomeState = ` class Home extends React.Component {
    constructor() {
      super();
      this.state = {
        best: [
          { category: "React", sub: "Router", title: "Router" },
          { category: "React", sub: "StateProps", title: "State and Props" },
        ],
      };
    }`;

// eslint-disable-next-line
export const Path = "`/${item.category}/${item.sub}`";

export const CodeHomeRender = ` render() {
    return (
      <div className="home">
        {this.state.best.map((item) => (
          <NavLink
            to={${Path}}
            key={${Path}}
          >
            <Box title={item.title === "" ? item.sub : item.title} />
          </NavLink>
        ))}
      </div>
    );
  }`;

export const CodeBoxProps = `function Box(props) {
    return <div className="box">{props.title}</div>;
  }`;
