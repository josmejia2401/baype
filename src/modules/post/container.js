import React from 'react';
import Presenter from './presenter';

class Container extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }

  componentDidMount() {
    const { onLoad } = this.props;
    if (onLoad) {
      onLoad();
    }
    this.loadData();
  }

  loadData = () => {
    const images = [
      {
        id: 1,
        title: 'titulo',
        items: [
          {
            id: 11,
            uri: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          },
          {
            id: 12,
            uri: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          }
        ]
      },
      {
        id: 2,
        title: 'titulo',
        items: [
          {
            id: 21,
            uri: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          }
        ]
      },
      {
        id: 3,
        title: 'titulo',
        items: [
          {
            id: 31,
            uri: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          }
        ]
      },
      {
        id: 4,
        title: 'titulo',
        items: [
          {
            id: 41,
            uri: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          }
        ]
      },
      {
        id: 5,
        title: 'titulo',
        items: [
          {
            id: 51,
            uri: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          }
        ]
      },
      {
        id: 6,
        title: 'titulo',
        items: [
          {
            id: 61,
            uri: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          }
        ]
      },
      {
        id: 7,
        title: 'titulo',
        items: [
          {
            id: 71,
            uri: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          }
        ]
      },
      {
        id: 8,
        title: 'titulo',
        items: [
          {
            id: 81,
            uri: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          }
        ]
      },
      {
        id: 9,
        title: 'titulo',
        items: [
          {
            id: 91,
            uri: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          }
        ]
      },
      {
        id: 10,
        title: 'titulo',
        items: [
          {
            id: 101,
            uri: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          }
        ]
      },
      {
        id: 11,
        title: 'titulo',
        items: [
          {
            id: 1141,
            uri: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          }
        ]
      },
      {
        id: 12,
        title: 'titulo',
        items: [
          {
            id: 121,
            uri: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          }
        ]
      },
      {
        id: 134,
        title: 'titulo',
        items: [
          {
            id: 1341,
            uri: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          }
        ]
      },
      {
        id: 14,
        title: 'titulo',
        items: [
          {
            id: 141,
            uri: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          }
        ]
      },
      {
        id: 154,
        title: 'titulo',
        items: [
          {
            id: 1541,
            uri: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          }
        ]
      },
      {
        id: 16,
        title: 'titulo',
        items: [
          {
            id: 1641,
            uri: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          }
        ]
      }
    ];
    this.setState({ images: images });
  }

  render() {
    return <Presenter {...this.props} state={this.state} />;
  }
}
export default Container;