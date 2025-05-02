// data/geojson.js
const countriesGeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "name": "Швейцария",
          "code": "CH",
          "diseaseRate": 120
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [[[7.5, 46], [8, 46], [8, 47], [7.5, 47], [7.5, 46]]]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Нигерия",
          "code": "NG",
          "diseaseRate": 400
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [[[3, 4], [4, 4], [4, 5], [3, 5], [3, 4]]]
        }
      }
    ]
  };