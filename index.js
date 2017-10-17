var input = {
    label: 'Earth',
    type: 'planet',
    children: [{
        label: 'Australia',
        type: 'country',
        children: [{
            label: 'Sydney',
            type: 'city',
            children: [{
                label: 'Nuix HQ',
                type: 'office',
                children: []
            }]
        }]
    }, {
        label: 'USA',
        type: 'country',
        children: [{
            label: 'San Franscisco',
            type: 'city',
            children: [{
                label: 'Nuix SF',
                type: 'office',
                children: []
            }]
        }, {
            label: 'Philadelphia',
            type: 'city',
            children: [{
                label: 'Nuix Philly',
                type: 'office',
                children: []
            }]
        }]
    }]
};

const isArray = (obj) => Object.prototype.toString.call(obj) === '[object Array]';

class TraversalJson extends React.Component {  
  render() {
    return (
        <ul>
         <Item data={input} handleClick={() => {}} />
        </ul>        
    );
  }
}

class Item extends React.Component {
	handleClick = () => {
  	console.log(this.props.data.label);
  	this.props.handleClick();
  }
  
  render() {
    return (
      Object.keys(this.props.data).map((key, index) => {
          if (isArray(this.props.data[key])) {
              return this.props.data[key].map((arrObj, arrIndex) => {
                return (
                	<div>
                    Children: <ul>
                      <Item data={arrObj} handleClick={this.handleClick} />
                    </ul>
                  </div>
                );
              });
          } else {
          	return <li onClick={this.handleClick} key={index}>{key}: {this.props.data[key]}</li>
          }
        })
    );
  }
}

ReactDOM.render(
  <TraversalJson />,
  document.getElementById('container')
);


