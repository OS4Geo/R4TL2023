var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_map_georeferenced_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "University of Moratuwa",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/map_georeferenced_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8894147.721766, 758083.983136, 8895061.815947, 758744.346721]
                            })
                        });
var format_Floor_plan_4 = new ol.format.GeoJSON();
var features_Floor_plan_4 = format_Floor_plan_4.readFeatures(json_Floor_plan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Floor_plan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Floor_plan_4.addFeatures(features_Floor_plan_4);
var lyr_Floor_plan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Floor_plan_4, 
                style: style_Floor_plan_4,
                interactive: true,
                title: '<img src="styles/legend/Floor_plan_4.png" /> Venue'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_map_georeferenced_3.setVisible(true);lyr_Floor_plan_4.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleMaps_1,lyr_OpenStreetMap_2,lyr_map_georeferenced_3,lyr_Floor_plan_4];
lyr_Floor_plan_4.set('fieldAliases', {'id': 'id', 'image': 'image', });
lyr_Floor_plan_4.set('fieldImages', {'id': 'TextEdit', 'image': '', });
lyr_Floor_plan_4.set('fieldLabels', {'id': 'no label', 'image': 'no label', });
lyr_Floor_plan_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});