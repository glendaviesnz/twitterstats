
//add function for higlighting node neigbours
sigma.classes.graph.addMethod('neighbors', function(nodeId) {
    var k,
            neighbors = {},
            index = this.allNeighborsIndex[nodeId] || {};

    for (k in index) {
        neighbors[k] = this.nodesIndex[k];
    }

    return neighbors;
});

angular.module('sigmaDirectives', [])
        .directive('sigmaGraph', function($window, dataService) {
            return{
                restrict: "EA",
                template: "",
                scope: {
                    networkData: '=',
                    tweeter: '=tweeter'

                },
                link: function(scope, elem, attrs) {

                    var Sigma = $window.sigma;
                    var graphContainer = attrs.graphContainer;
                    
                    var s = new Sigma({
                        
                        graph: scope.networkData,
                        container: graphContainer,
                        settings: {
                            defaultNodeColor: '#ec5148'
                        }
                    
                    });
                    
                    setRandomCoordinates(s);

                    s.startForceAtlas2({worker: true});
                    s.refresh();
                    setTimeout(function() {
                        s.stopForceAtlas2();
                    }, 6000);

                    s.bind('clickNode', clickNode);

                    function setRandomCoordinates(s) {

                        var i, nodes = s.graph.nodes(), len = nodes.length;

                        for (i = 0; i < len; i++) {

                            nodes[i].x = Math.random();
                            nodes[i].y = Math.random();
                            nodes[i].size = s.graph.degree(nodes[i].id);
                            nodes[i].color = nodes[i].center ? '#333' : '#666';

                        }

                    }
                    function clickNode(e) {

                        scope.$apply(function() {
                            scope.tweeter.hideProfile = true;
                            scope.tweeter = dataService.getRandomProfileDetails();
                            scope.tweeter.handle = e.data.node.label;
                            scope.tweeter.hideProfile = false;

                        
                        });
                        
                        var nodeId = e.data.node.id;
                        var toKeep = s.graph.neighbors(nodeId);
                        toKeep[nodeId] = e.data.node;

                        s.graph.nodes().forEach(function(n) {
                            
                            if (toKeep[n.id]) {
                                n.color = n.originalColor;
                            } else {
                                n.color = '#eee';
                            }
                            
                        });

                        s.graph.edges().forEach(function(e) {
                            
                            if (toKeep[e.source] && toKeep[e.target]) {
                                e.color = e.originalColor;
                            } else {
                                e.color = '#eee';
                            }
                            
                        });
                        
                        s.refresh();

                    }
                }
            };
        });
