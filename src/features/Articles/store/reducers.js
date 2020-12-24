import * as types from "./constants"

const initialState = {
  api: {
    isFetching: false,
  },
  articles: [
    {
      id: "1",
      title: 'Plants Of Our Nature',
      author: "Dr. Lorem",
      image: { uri: "https://images.unsplash.com/photo-1608199756415-7dbf77fa6393?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" },
      body: 'Ferns are a very old group of plants. They first appeared on Earth in the middle Devonian Era about 360 million years ago, just before the Carboniferous Era. Most of the modern fern families we see today first appeared in the Late Cretaceous about 45 or 50 million years ago – during the age of the dinosaurs!'
    },
    {
      id: "2",
      title: 'Balloon Trip',
      author: "Dr. Lorem",
      image: { uri: "https://images.unsplash.com/photo-1608264731903-819481d9ecf8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" },
      body: 'Mostly it’s about hot air - for without that balloons are just big empty bags with baskets on the bottom. ' +
        'The Montgolfier brothers had great hopes when they made the first manned flight. ' +
        'They thought balloons would take off as an available means of commercial flight. ' +
        'Instead, they have remained the province of sport, adventure and enjoyment. ' +
        'Modern balloons are a lot more sophisticated than their ancestors, ' +
        'but they still retain the essential characteristics which makes them so attractive. ' +
        'A plane is claustrophobic and very noisy. Balloons are so gentle and majestic and silent when the burner’s not working.',
    },
    {
      id: "3",
      title: 'Sea World',
      author: "Dr. Lorem",
      image: { uri: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2040&q=80" },
      body: 'The worlds oceans cover two thirds of our planet. As we take a dive from the rocks or paddle out from the beach, we are entering a place which is teeming with marine life. ' +
        'From fish to crabs to octopuses or even sea creatures that have not yet been discovered, the oceans and its coastlines are an amazing and interesting foray of water wildlife.',
    },
    {
      id: "4",
      title: 'Flowers',
      author: "Dr. Lorem",
      image: { uri: "https://images.unsplash.com/photo-1496304841270-2cb66cf766b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" },
      body: 'Flowers did not always exist; they first appeared 140 million years ago. Before that, ferns and cone bearing trees dominated the earth. ' +
        'Several centuries ago in Holland, tulips were more valuable than gold. ' +
        'Broccoli is actually a flower. Some plants such as orchids do not need soil to grow-they get all of their nutrients from the air.',
    }
  ],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ARTICLE_LIST:
      return Object.assign({}, state, {
        api: {
          isFetching: true,
        },
      })
    case types.ARTICLE_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        api: {
          isFetching: false,
        },
        articles: [...state.articles, action.response]
      })
    case types.ARTICLE_LIST_FAILED:
      return Object.assign({}, state, {
        api: {
          isFetching: false,
          errors: action.response
        }
      })
    case types.ARTICLE_READ:
      return Object.assign({}, state, {
        api: {
          isFetching: true,
        },
      })
    case types.ARTICLE_READ_SUCCEEDED:
      return Object.assign({}, state, {
        api: {
          isFetching: false,
        },
        articles: [
          ...state.articles.filter(record => record.id !== action.response.id),
          action.response
        ]
      })
    case types.ARTICLE_LIST_FAILED:
      return Object.assign({}, state, {
        api: {
          isFetching: false,
          errors: action.response
        }
      })
    default:
      return state
  }
}
