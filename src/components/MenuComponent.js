import React, { Component } from 'react';
import { Media } from 'reactstrap';


class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: [
        {
          id: 0,
          name: 'Uthappizza',
          image: 'assets/images/uthappizza.png',
          categoty: 'mains',
          label: 'Hot',
          price: '4.99',
          description: 'A unique combination of dishes. A unique combination of dishes. A unique combination of dishes. A unique combination of dishes.'
        },
        {
          id: 1,
          name: 'Zucchipakoda',
          image: 'assets/images/zucchipakoda.png',
          categoty: 'appetizer',
          label: '',
          price: '1.99',
          description: 'Deeep fried Dish. Deeep fried Dish. Deeep fried Dish. Deeep fried Dish. Deeep fried Dish. Deeep fried Dish.'
        },
        {
          id: 2,
          name: 'Vadonut',
          image: 'assets/images/vadonut.png',
          categoty: 'appetizer',
          label: 'New',
          price: '1.99',
          description: 'A quintessential Confusion Dishes. A quintessential Confusion Dishes. A quintessential Confusion Dishes. A quintessential Confusion Dishes. A quintessential Confusion Dishes.'
        },
        {
          id: 3,
          name: 'Elaicheese Cake',
          image: 'assets/images/elaicheesecake.png',
          categoty: 'dessert',
          label: '',
          price: '2.99',
          description: 'A delictable, Semisweet Dishes. A delictable, Semisweet Dishes. A delictable, Semisweet Dishes. A delictable, Semisweet Dishes. A delictable, Semisweet Dishes. A delictable, Semisweet Dishes.'
        }
      ]
    }
  }

  render() {

    const menu = this.state.dishes.map((dish) => {
      return (
        <div key={dish.id} className='col-12 mt-5'>
          <Media tag='li'>
            <Media left middle>
              <Media object src={dish.image} alt={dish.name} />
            </Media>
            <Media body className='ml-5'>
              <Media heading>{dish.name}</Media>
              <p>{dish.description}</p>
            </Media>
          </Media>
        </div>
      )
    });
    
    return (
      <div className='contaner'>
        <div className='row'>
          <Media list>
            { menu }
          </Media>
        </div>
      </div>
    );
  }
}

export default Menu;