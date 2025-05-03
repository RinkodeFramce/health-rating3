// data/geojson.js
const countriesGeoJSON = {
  "type": "FeatureCollection",
  "features": [
    // Швейцария
    {
      "type": "Feature",
      "properties": {
        "name": "Швейцария",
        "code": "CH",
        "diseaseRate": 120,
        "flag": "images/switzerland-flag.svg"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [5.9561, 45.8179],  // Юго-запад
            [5.9561, 47.8085],  // Северо-запад
            [10.4921, 47.8085], // Северо-восток
            [10.4921, 45.8179], // Юго-восток
            [5.9561, 45.8179]   // Замыкание полигона
          ]
        ]
      }
    },

    // Нигерия
    {
      "type": "Feature",
      "properties": {
        "name": "Нигерия",
        "code": "NG",
        "diseaseRate": 400,
        "flag": "images/nigeria-flag.svg"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [2.6699, 4.2386],   // Юго-запад
            [2.6699, 13.8926], // Северо-запад
            [14.6780, 13.8926],// Северо-восток
            [14.6780, 4.2386], // Юго-восток
            [2.6699, 4.2386]   // Замыкание полигона
          ]
        ]
      }
    },

    // Япония
    {
      "type": "Feature",
      "properties": {
        "name": "Япония",
        "code": "JP",
        "diseaseRate": 160,
        "flag": "images/japan-flag.svg"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [129.3994, 30.9024],  // Южный Японский архипелаг
            [129.3994, 45.5236],  // Северный Хоккайдо
            [145.8398, 45.5236], // Северо-восток
            [145.8398, 30.9024], // Юго-восток
            [129.3994, 30.9024]   // Замыкание полигона
          ]
        ]
      }
    },

    // Южная Корея
    {
      "type": "Feature",
      "properties": {
        "name": "Южная Корея",
        "code": "KR",
        "diseaseRate": 180,
        "flag": "images/south-korea-flag.svg"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [124.5459, 33.0589],  // Юго-запад
            [124.5459, 38.4492],  // Северо-запад
            [131.8713, 38.4492],  // Северо-восток
            [131.8713, 33.0589],  // Юго-восток
            [124.5459, 33.0589]   // Замыкание полигона
          ]
        ]
      }
    },

    // Таиланд
    {
      "type": "Feature",
      "properties": {
        "name": "Таиланд",
        "code": "TH",
        "diseaseRate": 200,
        "flag": "images/thailand-flag.svg"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [97.3438, 5.6113],   // Юго-запад
            [97.3438, 20.4585],  // Северо-запад
            [109.3359, 20.4585], // Северо-восток
            [109.3359, 5.6113],  // Юго-восток
            [97.3438, 5.6113]    // Замыкание полигона
          ]
        ]
      }
    },

    // Россия
    {
      "type": "Feature",
      "properties": {
        "name": "Россия",
        "code": "RU",
        "diseaseRate": 250,
        "flag": "images/russia-flag.svg"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [19.6406, 41.1859],  // Юго-запад
            [19.6406, 81.8525],  // Северо-запад
            [190.0, 81.8525],    // Северо-восток
            [190.0, 41.1859],    // Юго-восток
            [19.6406, 41.1859]   // Замыкание полигона
          ]
        ]
      }
    },

    // Индия
    {
      "type": "Feature",
      "properties": {
        "name": "Индия",
        "code": "IN",
        "diseaseRate": 300,
        "flag": "images/india-flag.svg"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [68.1766, 6.7535],   // Юго-запад
            [68.1766, 35.5087], // Северо-запад
            [97.4023, 35.5087], // Северо-восток
            [97.4023, 6.7535],  // Юго-восток
            [68.1766, 6.7535]   // Замыкание полигона
          ]
        ]
      }
    },

    // Канада
    {
      "type": "Feature",
      "properties": {
        "name": "Канада",
        "code": "CA",
        "diseaseRate": 180,
        "flag": "images/canada-flag.svg"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-141.0, 41.6751],   // Юго-запад
            [-141.0, 83.1105],  // Северо-запад
            [-52.6367, 83.1105],// Северо-восток
            [-52.6367, 41.6751],// Юго-восток
            [-141.0, 41.6751]   // Замыкание полигона
          ]
        ]
      }
    }
  ]
};