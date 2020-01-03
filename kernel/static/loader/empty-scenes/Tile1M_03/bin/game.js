dcl.subscribe('sceneStart');

dcl.addEntity('1');
dcl.setParent('1', '0');
dcl.updateEntityComponent('1', 'engine.transform', 1, JSON.stringify({"position":{"x":16,"y":0,"z":0},"rotation":{"x":0,"y":-0.7071067811865475,"z":0,"w":0.7071067811865476},"scale":{"x":1,"y":1,"z":1}}));

dcl.addEntity('2');
dcl.setParent('2', '1');
dcl.componentCreated('gltfShape', 'engine.shape', 54);
dcl.componentUpdated('gltfShape', JSON.stringify({"withCollisions":true,"visible":true,"src":"models/FloorBaseGrass_01/FloorBaseGrass_01.glb"}));
dcl.attachEntityComponent('2', 'engine.shape', 'gltfShape');
dcl.updateEntityComponent('2', 'engine.transform', 1, JSON.stringify({"position":{"x":8,"y":0,"z":8},"rotation":{"x":0,"y":0,"z":0,"w":1},"scale":{"x":1,"y":1,"z":1}}));

dcl.addEntity('3');
dcl.setParent('3', '1');
dcl.updateEntityComponent('3', 'engine.transform', 1, JSON.stringify({"position":{"x":12.5,"y":0,"z":3},"rotation":{"x":0,"y":0,"z":0,"w":1},"scale":{"x":1,"y":1,"z":1}}));
dcl.componentCreated('gltfShape2', 'engine.shape', 54);
dcl.componentUpdated('gltfShape2', JSON.stringify({"withCollisions":true,"visible":true,"src":"models/SnowTree_01.glb"}));
dcl.attachEntityComponent('3', 'engine.shape', 'gltfShape2');

dcl.addEntity('4');
dcl.setParent('4', '1');
dcl.updateEntityComponent('4', 'engine.transform', 1, JSON.stringify({"position":{"x":3.5,"y":0,"z":9},"rotation":{"x":0,"y":0,"z":0,"w":1},"scale":{"x":1,"y":1,"z":1}}));
dcl.componentCreated('gltfShape3', 'engine.shape', 54);
dcl.componentUpdated('gltfShape3', JSON.stringify({"withCollisions":true,"visible":true,"src":"models/SnowRock_04.glb"}));
dcl.attachEntityComponent('4', 'engine.shape', 'gltfShape3');

dcl.addEntity('5');
dcl.setParent('5', '1');
dcl.updateEntityComponent('5', 'engine.transform', 1, JSON.stringify({"position":{"x":12,"y":0,"z":4},"rotation":{"x":7.637795347065533e-17,"y":0.34715867042541504,"z":-4.138453491009386e-8,"w":0.9378064870834351},"scale":{"x":1,"y":1,"z":1}}));
dcl.componentCreated('gltfShape4', 'engine.shape', 54);
dcl.componentUpdated('gltfShape4', JSON.stringify({"withCollisions":true,"visible":true,"src":"models/SnowLog_01.glb"}));
dcl.attachEntityComponent('5', 'engine.shape', 'gltfShape4');

dcl.addEntity('6');
dcl.setParent('6', '1');
dcl.updateEntityComponent('6', 'engine.transform', 1, JSON.stringify({"position":{"x":4.610942363739014,"y":0,"z":12.5},"rotation":{"x":0,"y":0,"z":0,"w":1},"scale":{"x":1,"y":1,"z":1}}));
dcl.attachEntityComponent('6', 'engine.shape', 'gltfShape3');

dcl.addEntity('7');
dcl.setParent('7', '1');
dcl.updateEntityComponent('7', 'engine.transform', 1, JSON.stringify({"position":{"x":8,"y":0.0005483627319335938,"z":8},"rotation":{"x":0,"y":0,"z":0,"w":1},"scale":{"x":1,"y":1,"z":1}}));
dcl.componentCreated('gltfShape5', 'engine.shape', 54);
dcl.componentUpdated('gltfShape5', JSON.stringify({"withCollisions":true,"visible":true,"src":"models/Floor_Snow.glb"}));
dcl.attachEntityComponent('7', 'engine.shape', 'gltfShape5');

dcl.addEntity('8');
dcl.setParent('8', '1');
dcl.updateEntityComponent('8', 'engine.transform', 1, JSON.stringify({"position":{"x":14,"y":0.3062257766723633,"z":3.5},"rotation":{"x":0,"y":0,"z":0,"w":1},"scale":{"x":1,"y":1,"z":1}}));
dcl.componentCreated('gltfShape6', 'engine.shape', 54);
dcl.componentUpdated('gltfShape6', JSON.stringify({"withCollisions":true,"visible":true,"src":"models/SnowRock_01.glb"}));
dcl.attachEntityComponent('8', 'engine.shape', 'gltfShape6');

dcl.addEntity('9');
dcl.setParent('9', '1');
dcl.componentCreated('gltfShape7', 'engine.shape', 54);
dcl.componentUpdated('gltfShape7', JSON.stringify({"withCollisions":true,"visible":true,"src":"models/SnowTree_03.glb"}));
dcl.attachEntityComponent('9', 'engine.shape', 'gltfShape7');
dcl.updateEntityComponent('9', 'engine.transform', 1, JSON.stringify({"position":{"x":4,"y":0,"z":4.5},"rotation":{"x":3.6312916547678615e-16,"y":-0.7758766412734985,"z":9.24916889744054e-8,"w":0.6308847069740295},"scale":{"x":1.2288727760314941,"y":1.2288727760314941,"z":1.2288727760314941}}));

dcl.addEntity('10');
dcl.setParent('10', '1');
dcl.componentCreated('gltfShape8', 'engine.shape', 54);
dcl.componentUpdated('gltfShape8', JSON.stringify({"withCollisions":true,"visible":true,"src":"models/SnowTree_02.glb"}));
dcl.attachEntityComponent('10', 'engine.shape', 'gltfShape8');
dcl.updateEntityComponent('10', 'engine.transform', 1, JSON.stringify({"position":{"x":4,"y":0,"z":13},"rotation":{"x":0,"y":0,"z":0,"w":1},"scale":{"x":1.0969419479370117,"y":1.0969419479370117,"z":1.0969419479370117}}));

dcl.addEntity('11');
dcl.setParent('11', '1');
dcl.updateEntityComponent('11', 'engine.transform', 1, JSON.stringify({"position":{"x":5.411953926086426,"y":0.05103778839111328,"z":8.493051528930664},"rotation":{"x":2.202614285174936e-16,"y":-0.23055486381053925,"z":2.748427796461783e-8,"w":0.973059356212616},"scale":{"x":1,"y":1,"z":1}}));
dcl.componentCreated('gltfShape9', 'engine.shape', 54);
dcl.componentUpdated('gltfShape9', JSON.stringify({"withCollisions":true,"visible":true,"src":"models/SnowLog_02.glb"}));
dcl.attachEntityComponent('11', 'engine.shape', 'gltfShape9');

dcl.addEntity('12');
dcl.setParent('12', '1');
dcl.updateEntityComponent('12', 'engine.transform', 1, JSON.stringify({"position":{"x":7,"y":0,"z":1.5},"rotation":{"x":0,"y":0,"z":0,"w":1},"scale":{"x":1,"y":1,"z":1}}));
dcl.componentCreated('gltfShape10', 'engine.shape', 54);
dcl.componentUpdated('gltfShape10', JSON.stringify({"withCollisions":true,"visible":true,"src":"models/Grass_03/Grass_03.glb"}));
dcl.attachEntityComponent('12', 'engine.shape', 'gltfShape10');

dcl.addEntity('13');
dcl.setParent('13', '1');
dcl.updateEntityComponent('13', 'engine.transform', 1, JSON.stringify({"position":{"x":5.5,"y":0,"z":5},"rotation":{"x":0,"y":0,"z":0,"w":1},"scale":{"x":1,"y":1,"z":1}}));
dcl.attachEntityComponent('13', 'engine.shape', 'gltfShape10');

dcl.addEntity('14');
dcl.setParent('14', '1');
dcl.updateEntityComponent('14', 'engine.transform', 1, JSON.stringify({"position":{"x":9.727373123168945,"y":0,"z":9.5},"rotation":{"x":0,"y":0,"z":0,"w":1},"scale":{"x":1,"y":1,"z":1}}));
dcl.attachEntityComponent('14', 'engine.shape', 'gltfShape10');

dcl.addEntity('15');
dcl.setParent('15', '1');
dcl.updateEntityComponent('15', 'engine.transform', 1, JSON.stringify({"position":{"x":1,"y":0,"z":14.5},"rotation":{"x":0,"y":0,"z":0,"w":1},"scale":{"x":1,"y":1,"z":1}}));
dcl.attachEntityComponent('15', 'engine.shape', 'gltfShape10');

dcl.addEntity('16');
dcl.setParent('16', '1');
dcl.updateEntityComponent('16', 'engine.transform', 1, JSON.stringify({"position":{"x":1,"y":0,"z":2},"rotation":{"x":0,"y":0,"z":0,"w":1},"scale":{"x":1,"y":1,"z":1}}));
dcl.attachEntityComponent('16', 'engine.shape', 'gltfShape10');

dcl.addEntity('17');
dcl.setParent('17', '1');
dcl.updateEntityComponent('17', 'engine.transform', 1, JSON.stringify({"position":{"x":14,"y":0,"z":1.5},"rotation":{"x":0,"y":0,"z":0,"w":1},"scale":{"x":1,"y":1,"z":1}}));
dcl.attachEntityComponent('17', 'engine.shape', 'gltfShape10');

dcl.addEntity('18');
dcl.setParent('18', '1');
dcl.updateEntityComponent('18', 'engine.transform', 1, JSON.stringify({"position":{"x":14.5,"y":0,"z":11},"rotation":{"x":2.032753924292364e-15,"y":-0.7190765738487244,"z":8.57205932902616e-8,"w":0.6949308514595032},"scale":{"x":1,"y":1,"z":1}}));
dcl.componentCreated('gltfShape11', 'engine.shape', 54);
dcl.componentUpdated('gltfShape11', JSON.stringify({"withCollisions":true,"visible":true,"src":"models/Plant_03/Plant_03.glb"}));
dcl.attachEntityComponent('18', 'engine.shape', 'gltfShape11');

dcl.addEntity('19');
dcl.setParent('19', '1');
dcl.updateEntityComponent('19', 'engine.transform', 1, JSON.stringify({"position":{"x":11,"y":0.4789273738861084,"z":5.5},"rotation":{"x":-5.119466286172044e-15,"y":-0.9998422861099243,"z":1.1919047437913832e-7,"w":0.01776476390659809},"scale":{"x":1,"y":1,"z":1}}));
dcl.attachEntityComponent('19', 'engine.shape', 'gltfShape11');

dcl.addEntity('20');
dcl.setParent('20', '1');
dcl.updateEntityComponent('20', 'engine.transform', 1, JSON.stringify({"position":{"x":4,"y":0,"z":9.028438568115234},"rotation":{"x":6.154739918096759e-16,"y":-0.7383295297622681,"z":8.801572448646766e-8,"w":0.6744402050971985},"scale":{"x":1,"y":1,"z":1}}));
dcl.attachEntityComponent('20', 'engine.shape', 'gltfShape11');

dcl.addEntity('21');
dcl.setParent('21', '1');
dcl.updateEntityComponent('21', 'engine.transform', 1, JSON.stringify({"position":{"x":9.637752532958984,"y":0,"z":12.057339668273926},"rotation":{"x":5.840853330645957e-15,"y":0.9992162585258484,"z":-1.191158531810288e-7,"w":-0.039585329592227936},"scale":{"x":3.428689479827881,"y":0.10282117128372192,"z":3.799405097961426}}));
dcl.componentCreated('gltfShape12', 'engine.shape', 54);
dcl.componentUpdated('gltfShape12', JSON.stringify({"withCollisions":true,"visible":true,"src":"models/Snow_02.glb"}));
dcl.attachEntityComponent('21', 'engine.shape', 'gltfShape12');

dcl.addEntity('22');
dcl.setParent('22', '1');
dcl.updateEntityComponent('22', 'engine.transform', 1, JSON.stringify({"position":{"x":2.4853157997131348,"y":0,"z":13},"rotation":{"x":0,"y":0,"z":0,"w":1},"scale":{"x":1,"y":1,"z":1}}));
dcl.attachEntityComponent('22', 'engine.shape', 'gltfShape12');

dcl.addEntity('23');
dcl.setParent('23', '1');
dcl.updateEntityComponent('23', 'engine.transform', 1, JSON.stringify({"position":{"x":12.5,"y":0,"z":7},"rotation":{"x":0,"y":0,"z":0,"w":1},"scale":{"x":2.0359723567962646,"y":0.5240237712860107,"z":1}}));
dcl.componentCreated('gltfShape13', 'engine.shape', 54);
dcl.componentUpdated('gltfShape13', JSON.stringify({"withCollisions":true,"visible":true,"src":"models/Snow_03.glb"}));
dcl.attachEntityComponent('23', 'engine.shape', 'gltfShape13');

dcl.addEntity('24');
dcl.setParent('24', '1');
dcl.attachEntityComponent('24', 'engine.shape', 'gltfShape8');
dcl.updateEntityComponent('24', 'engine.transform', 1, JSON.stringify({"position":{"x":13.899871826171875,"y":0,"z":13.415389060974121},"rotation":{"x":0,"y":0,"z":0,"w":1},"scale":{"x":1.0969419479370117,"y":1.0969419479370117,"z":1.0969419479370117}}));

dcl.addEntity('25');
dcl.setParent('25', '1');
dcl.updateEntityComponent('25', 'engine.transform', 1, JSON.stringify({"position":{"x":8.184085845947266,"y":0,"z":11.966928482055664},"rotation":{"x":7.306219905879423e-15,"y":-0.9903469085693359,"z":1.1805852295765362e-7,"w":0.13861127197742462},"scale":{"x":0.6057720184326172,"y":0.6057720184326172,"z":0.6057720184326172}}));
dcl.componentCreated('gltfShape14', 'engine.shape', 54);
dcl.componentUpdated('gltfShape14', JSON.stringify({"withCollisions":true,"visible":true,"src":"models/Snowman.glb"}));
dcl.attachEntityComponent('25', 'engine.shape', 'gltfShape14');

dcl.addEntity('26');
dcl.setParent('26', '1');
dcl.updateEntityComponent('26', 'engine.transform', 1, JSON.stringify({"position":{"x":7.5,"y":0,"z":4},"rotation":{"x":0,"y":0,"z":0,"w":1},"scale":{"x":0.42386627197265625,"y":0.42386627197265625,"z":0.42386627197265625}}));
dcl.componentCreated('gltfShape15', 'engine.shape', 54);
dcl.componentUpdated('gltfShape15', JSON.stringify({"withCollisions":true,"visible":true,"src":"models/Bush_01.glb"}));
dcl.attachEntityComponent('26', 'engine.shape', 'gltfShape15');

dcl.addEntity('27');
dcl.setParent('27', '1');
dcl.updateEntityComponent('27', 'engine.transform', 1, JSON.stringify({"position":{"x":12.5,"y":0,"z":10},"rotation":{"x":0,"y":0,"z":0,"w":1},"scale":{"x":1,"y":1,"z":1}}));
dcl.componentCreated('gltfShape16', 'engine.shape', 54);
dcl.componentUpdated('gltfShape16', JSON.stringify({"withCollisions":true,"visible":true,"src":"models/Bush_03.glb"}));
dcl.attachEntityComponent('27', 'engine.shape', 'gltfShape16');