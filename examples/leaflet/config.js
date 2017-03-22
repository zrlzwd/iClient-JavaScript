/**
 * Leaflet 示例配置文件：包含示例的分类、名称、缩略图、文件路径
 */
var exampleConfig = {
    "iServer": {
        name: "iServer",
        content: {
            "map": {
                name: "地图",
                content: [{
                    name: "4326底图",
                    thumbnail: "l_tiledMapLayer4326.png",
                    fileName: "01_tiledMapLayer4326"
                }, {
                    name: "3857底图",
                    thumbnail: "l_tiledMapLayer3857.png",
                    fileName: "01_tiledMapLayer3857"
                }, {
                    name: "地图叠加",
                    thumbnail: "l_overlayTiledMapLayer.png",
                    fileName: "01_overlayTiledMapLayer"

                }, {
                    name: "平面坐标系底图",
                    thumbnail: "l_tiledMapLayerNonEarth.png",
                    fileName: "01_tiledMapLayerNonEarth"
                }, {
                    name: "地图信息",
                    thumbnail: "l_mapService.png",
                    fileName: "01_mapService"

                }, {
                    name: "测量",
                    thumbnail: "l_measure.png",
                    fileName: "01_measure"
                }, {
                    name: "图层信息",
                    thumbnail: "l_layerService.png",
                    fileName: "01_layerService"
                }, {
                    name: "范围查询",
                    thumbnail: "l_mapQueryByBounds.png",
                    fileName: "01_mapQueryByBounds"
                }, {
                    name: "距离查询",
                    thumbnail: "l_mapQueryByDistance.png",
                    fileName: "01_mapQueryByDistance"
                }, {
                    name: "几何查询",
                    thumbnail: "l_mapQueryByGeometry.png",
                    fileName: "01_mapQueryByGeometry"
                }, {
                    name: "SQL查询",
                    thumbnail: "l_mapQueryBySQL.png",
                    fileName: "01_mapQueryBySQL"
                }]
            },
            "data": {
                name: "数据",
                content: [{
                    name: "ID查询",
                    thumbnail: "l_getFeatureByIDs.png",
                    fileName: "02_getFeatureByIDs"
                }, {
                    name: "SQL查询",
                    thumbnail: "l_getFeatureBySQL.png",
                    fileName: "02_getFeatureBySQL"
                }, {
                    name: "范围查询",
                    thumbnail: "l_getFeatureByBounds.png",
                    fileName: "02_getFeatureByBounds"
                }, {
                    name: "几何查询",
                    thumbnail: "l_getFeatureByGeometry.png",
                    fileName: "02_getFeatureByGeometry"
                }, {
                    name: "缓冲区查询",
                    thumbnail: "l_getFeatureByBuffer.png",
                    fileName: "02_getFeatureByBuffer"
                }, {
                    name: "栅格查询",
                    thumbnail: "l_getGridCellInfos.png",
                    fileName: "02_getGridCellInfos"
                }, {
                    name: "字段信息",
                    thumbnail: "l_fieldsService.png",
                    fileName: "02_fieldsService"
                }, {
                    name: "字段查询统计",
                    thumbnail: "l_fieldStatistics.png",
                    fileName: "02_fieldStatistics"
                }, {
                    name: "地物编辑",
                    thumbnail: "l_editFeatures.png",
                    fileName: "02_editFeatures"
                }]
            },
            "theme": {
                name: "专题图",
                content: [{
                    name: "点密度专题图",
                    thumbnail: "l_themeDotDensity.png",
                    fileName: "03_themeDotDensity"
                }, {
                    name: "等级符号专题图",
                    thumbnail: "l_themeGraduatedSymbol.png",
                    fileName: "03_themeGraduatedSymbol"
                }, {
                    name: "统计专题图",
                    thumbnail: "l_themeGraph.png",
                    fileName: "03_themeGraph"
                }, {
                    name: "矩阵标签专题图",
                    thumbnail: "l_themeLabel.png",
                    fileName: "03_themeLabel"
                }, {
                    name: "分段专题图",
                    thumbnail: "l_themeRange.png",
                    fileName: "03_themeRange"
                }, {
                    name: "单值专题图",
                    thumbnail: "l_themeUnique.png",
                    fileName: "03_themeUnique"
                }, {
                    name: "栅格分段专题图",
                    thumbnail: "l_themeGridRange.png",
                    fileName: "03_themeGridRange"
                }, {
                    name: "栅格单值专题图",
                    thumbnail: "l_themeGridUnique.png",
                    fileName: "03_themeGridUnique"
                }]
            },
            "spatialAnalyst": {
                name: "空间分析",
                content: [{
                    name: "缓冲区分析",
                    thumbnail: "l_bufferAnalystService.png",
                    fileName: "04_bufferAnalystService"
                }]
            },
            "networkAnalyst": {
                name: "网络分析",
                content: [{
                    name: "服务区分析",
                    thumbnail: "l_findServiceAreas.png",
                    fileName: "05_findServiceAreas"
                }]
            },
            "trafficTransferAnalyst": {
                name: "交通换乘",
                content: [{
                    name: "交通换乘",
                    thumbnail: "l_trafficTransferAnalystService.png",
                    fileName: "06_trafficTransferAnalystService"
                }]
            }
        }
    },
    "iPortal": {
        name: "iPortal",
        content: null
    },
    "online": {
        name: "online",
        content: null
    },
    "iManager": {
        name: "iManager",
        content: null
    },
    "plot": {
        name: "标绘",
        content: {
            "draw": {
                name: "点线面绘制",
                content: null
            },
            "drawPlot": {
                name: "动态标绘",
                content: null
            }
        }
    },
    "viz": {
        name: "可视化",
        content: {
            "heat": {
                name: "热力图",
                content: [{
                    name: "热力图-随机点",
                    thumbnail: "l_heat.png",
                    fileName: "12_heatMap"
                }]
            },
            "animate": {
                name: "动画",
                content: [{
                    name: "闪烁点",
                    thumbnail: "l_pulse.png",
                    fileName: "12_pulse"
                }]
            },
            "cluster": {
                name: "聚合",
                content: [{
                    name: "点聚合",
                    thumbnail: "l_markerCluster.png",
                    fileName: "12_markerCluster"
                }]
            },
            // "D3Theme": {
            //     name: "D3-单值专题图",
            //     content: null
            // },
            "ECharts": {
                name: "ECharts",
                content: [
                    {
                        name: "散点地图",
                        thumbnail: "l_echartsEffectScatter.png",
                        fileName: "echartsEffectScatter"
                    },
                    {
                        name: "迁徙图",
                        thumbnail: "l_echartsGeoLines.png",
                        fileName: "echartsGeoLines"
                    },
                    {
                        name: "热力图",
                        thumbnail: "l_echartsHeatmap.png",
                        fileName: "echartsHeatmap"
                    },
                    {
                        name: "线路图",
                        thumbnail: "l_echartsLinesBus.png",
                        fileName: "echartsLinesBus"
                    },
                    {
                        name: "线特效",
                        thumbnail: "l_echartsLinesEffect.png",
                        fileName: "echartsLinesEffect"
                    },
                    {
                        name: "折线图",
                        thumbnail: "l_echartsLineMarker.png",
                        fileName: "echartsLineMarker"
                    },
                    {
                        name: "散点图",
                        thumbnail: "l_echartsScatter.png",
                        fileName: "echartsScatter"
                    },
                    {
                        name: "饼图",
                        thumbnail: "l_echartsPie.png",
                        fileName: "echartsPie"
                    }
                ]

            }
        }
    },
    "OGC": {
        name: "OGC",
        content: null
    }

};