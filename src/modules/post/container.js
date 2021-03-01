import React from 'react';
import Presenter from './presenter';
import { getDimentions } from '../../utils/dimensions';

class Container extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      loading: false,
      dimentions: getDimentions()
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
        title: 'flexDirection: If you want to move horizontally (row) or vertically (column)',
        createdAt: new Date,
        username: 'username',
        items: [
          {
            id: 11,
            uri: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          },
          {
            id: 12,
            uri: 'https://stream-5.zonarutoppuden.tv/ns-sub/1.mp4'
          }
        ]
      },
      {
        id: 2,
        title: 'This Gig Take a glance at the showcase of our artistic work: Modern and Trendy Logo Artworkslkjfkljf ksnfksfnsf Mascot & Custom Logo efdfg Artworks:lk knnk Explore the ultimate Experience..! To fulfill your designing needs, Make us Graphically Yours...!! Why Team StrideInIt? We believe in our',
        username: 'username',
        createdAt: new Date,
        items: [
          {
            id: 21,
            uri: 'https://stream-5.zonarutoppuden.tv/ns-sub/1.mp4'
          }
        ]
      },
      {
        id: 3,
        title: 'titulo',
        username: 'username',createdAt: new Date,
        items: [
          {
            id: 31,
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
          }
        ]
      },
      {
        id: 4,
        title: 'titulo',username: 'username',createdAt: new Date,
        items: [
          {
            id: 41,
            uri: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          }
        ]
      },
      {
        id: 5,
        title: 'titulo',username: 'username',createdAt: new Date,
        items: [
          {
            id: 51,
            uri: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          }
        ]
      },
      {
        id: 6,
        title: 'titulo',username: 'username',createdAt: new Date,
        items: [
          {
            id: 61,
            uri: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          }
        ]
      },
      {
        id: 7,
        title: 'titulo',username: 'username',createdAt: new Date,
        items: [
          {
            id: 71,
            uri: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          }
        ]
      },
      {
        id: 8,
        title: 'titulo',username: 'username',createdAt: new Date,
        items: [
          {
            id: 81,
            uri: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          }
        ]
      },
      {
        id: 9,
        title: 'titulo',username: 'username',createdAt: new Date,
        items: [
          {
            id: 91,
            uri: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          }
        ]
      },
      {
        id: 10,
        title: 'titulo',username: 'username',createdAt: new Date,
        items: [
          {
            id: 101,
            uri: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          }
        ]
      },
      {
        id: 11,
        title: 'titulo',username: 'username',createdAt: new Date,
        items: [
          {
            id: 1141,
            uri: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          }
        ]
      },
      {
        id: 12,
        title: 'titulo',username: 'username',createdAt: new Date,
        items: [
          {
            id: 121,
            uri: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          }
        ]
      },
      {
        id: 134,
        title: 'titulo',username: 'username',createdAt: new Date,
        items: [
          {
            id: 1341,
            uri: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          }
        ]
      },
      {
        id: 14,
        title: 'titulo',username: 'username',createdAt: new Date,
        items: [
          {
            id: 141,
            uri: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          }
        ]
      },
      {
        id: 154,
        title: 'titulo',username: 'username',createdAt: new Date,
        items: [
          {
            id: 1541,
            uri: 'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          }
        ]
      },
      {
        id: 16,
        title: 'titulo',username: 'username',createdAt: new Date,
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

  _handleOnRefresh () {

  }

  _handleLoadMore = (e) => {

  }
  
  _onViewableItemsChanged = ({ viewableItems, changed }) => {
    //console.log("Visible items are", viewableItems);
    //console.log("Changed in this iteration", changed);
    this._handleOnRefreshItem(changed);
  }

  _handleOnRefreshItem = async (data) => {
    if (data && data.length > 0) {
      const currentData = data[0];
      await new Promise(r => setTimeout(r, 2000));
      //console.log(currentData);
    }
  }
  render() {
    return (<Presenter 
      {...this.props} 
      state={this.state} 
      _handleLoadMore={this._handleLoadMore} 
      _onViewableItemsChanged={this._onViewableItemsChanged}
      _handleOnRefresh={this._handleOnRefresh}
    />);
  }
}
export default Container;