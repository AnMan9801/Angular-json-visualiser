const data = [{
  "id": "B",
  "fileType": "content",
  "type": "UnguardedNodeServer",
  "description": "root",
  "onSuccessChange": 1,
  "onFailureChange": 0,
  "onGuardedChange": 1,
  "children": [{
      "id": "B_1",
      "fileType": "content",
      "type": "COWNSPassage",
      "description": "Game Intro",
      "guard": "(!(${TutorialComplete}))",
      "tags": [
        "IntroItems"
      ],
      "override": {
        "level": 0,
        "intro": true
      },
      "children": [{
          "id": "B_1_0_1_1",
          "type": "COWNSStage1",
          "children": [{
            "id": "B_1_0_1_1_1",
            "type": "DNWrapper",
            "children": [{
              "id": "B_1_0_1_1_1_D",
              "type": "DataNode",
              "data": {
                "viewID": "com.scilearn.DataStream.NormalMechanic",
                "item": "1",
                "passageId": "0_1",
                "trialId": "1101",
                "stageType": "PreStrat",
                "taskType": "CompQuest",
                "questionType": "",
                "stage": 1,
                "graphicName": "",
                "question": "\"According to the author of this passage, what kind of animal makes the best pet?\"",
                "answer": "dogs",
                "intervention": "",
                "foil1": "birds",
                "foil2": "cats",
                "foil3": "fish",
                "pages": [
                  "\"Some people keep birds as pets, and lots of people have pet cats. But I think that dogs make the best pets. My favorite kind of dog is the poodle.\""
                ]
              }
            }]
          }]
        },
        {
          "id": "B_1_0_1_2",
          "type": "COWNSStage2",
          "children": [{
            "id": "B_1_0_1_2_1",
            "type": "DNWrapper",
            "children": [{
              "id": "B_1_0_1_2_1_D",
              "type": "DataNode",
              "data": {
                "viewID": "com.scilearn.DataStream.NormalMechanic",
                "item": "1",
                "passageId": "0_1",
                "trialId": "1201",
                "stageType": "Strategy",
                "taskType": "ChooseDiagram",
                "questionType": "",
                "stage": 2,
                "question": "Select the diagram that illustrates the following statement: All poodles are dogs.",
                "intervention": "",
                "answer": "all poodles are dogs",
                "answerDiag": {
                  "diagramType": "All",
                  "liText": "poodles",
                  "liColor": "yellow",
                  "roText": "dogs",
                  "roColor": "red"
                },
                "foil1": "no cats are dogs",
                "foil1Diag": {
                  "diagramType": "None",
                  "liText": "cats",
                  "liColor": "blue",
                  "roText": "dogs",
                  "roColor": "yellow"
                },
                "foil2": "some cats are poodles",
                "foil2Diag": {
                  "diagramType": "Some",
                  "liText": "cats",
                  "liColor": "blue",
                  "roText": "poodles",
                  "roColor": "red"
                },
                "foil3": "some pets are dogs",
                "foil3Diag": {
                  "diagramType": "Some",
                  "liText": "pets",
                  "liColor": "green",
                  "roText": "dogs",
                  "roColor": "yellow"
                }
              }
            }]
          }]
        }
      ]
    },
    {
      "id": "B_2",
      "fileType": "content",
      "type": "COWNSRoot",
      "description": "Game Play",
      "guard": "(!(${GamePlayComplete}))",
      "tags": [
        "AllItems"
      ],
      "override": {
        "intro": false
      },
      "children": [{
          "id": "B_2_1",
          "type": "COWNSLevel",
          "description": "Level 1 Node",
          "override": {
            "level": 1
          },
          "children": [{
              "id": "B_2_1_1",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_1_1_1",
                  "type": "COWNSStage1",
                  "children": [{
                    "id": "B_2_1_1_1_1",
                    "type": "DNWrapper",
                    "children": [{
                      "id": "B_2_1_1_1_1_D",
                      "type": "DataNode",
                      "data": {
                        "viewID": "com.scilearn.DataStream.NormalMechanic",
                        "item": "1",
                        "passageId": "1_1",
                        "trialId": "11101",
                        "stageType": "PreStrat",
                        "taskType": "CompQuest",
                        "questionType": "",
                        "stage": 1,
                        "graphicName": "",
                        "question": "\"According to the story, how are Ziplings like plants?\"",
                        "answer": "They use photosynthesis to make nutrients.",
                        "intervention": "",
                        "foil1": "They convert solar energy in their leaves.",
                        "foil2": "They cannot grow without enough sunlight.",
                        "foil3": "They have smooth greenish skin covering their bodies.",
                        "pages": [
                          "\"The people of planet Zip are known as Ziplings. Like Earthlings, Ziplings have smooth skin covering their bodies. However, all Ziplings have a greenish tint to their skin. This is because, like many plants on Earth, they utilize photosynthesis. Chemicals in their skin convert solar energy into nutrients.\"",
                          "\"When a Zipling feels hungry, a little time outdoors in the sunlight makes a perfectly good snack. However, they can also eat what we would consider food. They must eat extra food during the winter, when there are less hours of sunlight. Indeed, some Ziplings waste away during the winter because they fail to eat enough food.\""
                        ]
                      }
                    }]
                  }]
                },
                {
                  "id": "B_2_1_1_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_1_1_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_1_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "1_1",
                          "trialId": "11201",
                          "stageType": "Strategy",
                          "taskType": "LogicQuest",
                          "questionType": "",
                          "stage": 2,
                          "question": "\"According to the story, which of these statements is true?\"",
                          "answer": "All Ziplings are green-skinned beings.",
                          "intervention": "CircleDiagrams",
                          "foil1": "All green-skinned beings are Ziplings.",
                          "foil2": "All green-skinned beings are Earthlings.",
                          "foil3": "All Earthlings are green-skinned beings."
                        }
                      }]
                    },
                    {
                      "id": "B_2_1_1_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_1_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "1_1",
                          "trialId": "11202",
                          "stageType": "Strategy",
                          "taskType": "ChooseDiagram",
                          "questionType": "",
                          "stage": 2,
                          "question": "Select the diagram that illustrates the following statement: All Ziplings are green-skinned beings.",
                          "intervention": "CircleDiagrams",
                          "answer": "All Ziplings are green-skinned beings.",
                          "answerDiag": {
                            "diagramType": "",
                            "liText": "",
                            "liColor": "",
                            "roText": "",
                            "roColor": ""
                          },
                          "foil1": "All Earthlings are green -skinned beings.",
                          "foil1Diag": {
                            "diagramType": "",
                            "liText": "",
                            "liColor": "",
                            "roText": "",
                            "roColor": ""
                          },
                          "foil2": "All green-skinned beings are Earthlings.",
                          "foil2Diag": {
                            "diagramType": "",
                            "liText": "",
                            "liColor": "",
                            "roText": "",
                            "roColor": ""
                          },
                          "foil3": "All green-skinned beings are Ziplings.",
                          "foil3Diag": {
                            "diagramType": "",
                            "liText": "",
                            "liColor": "",
                            "roText": "",
                            "roColor": ""
                          }
                        }
                      }]
                    },
                    {
                      "id": "B_2_1_1_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_1_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "1_1",
                          "trialId": "11203",
                          "stageType": "Strategy",
                          "taskType": "LogicQuest",
                          "questionType": "",
                          "stage": 2,
                          "question": "\"According to the story, which of these statements is true?\"",
                          "answer": "Some Zipling snacks are sunlight.",
                          "intervention": "CircleDiagrams",
                          "foil1": "No Zipling snacks are sunlight.",
                          "foil2": "All Zipling snacks are sunlight.",
                          "foil3": "All sunlight is eaten as snacks by Ziplings."
                        }
                      }]
                    },
                    {
                      "id": "B_2_1_1_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_1_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "1_1",
                          "trialId": "11204",
                          "stageType": "Strategy",
                          "taskType": "ChooseDiagram",
                          "questionType": "",
                          "stage": 2,
                          "question": "Select the diagram that illustrates the following statement: Some Zipling snacks are sunlight.",
                          "intervention": "CircleDiagrams",
                          "answer": "Some Zipling snacks are sunlight.",
                          "answerDiag": {
                            "diagramType": "Some",
                            "liText": "Zipling snacks",
                            "liColor": "orange",
                            "roText": "sunlight",
                            "roColor": "purple"
                          },
                          "foil1": "All Ziplings are sunlight snacks.",
                          "foil1Diag": {
                            "diagramType": "All",
                            "liText": "Ziplings",
                            "liColor": "blue",
                            "roText": "sunlight snacks",
                            "roColor": "red"
                          },
                          "foil2": "All sunlight eaters are Ziplings.",
                          "foil2Diag": {
                            "diagramType": "All",
                            "liText": "sunlight eaters",
                            "liColor": "green",
                            "roText": "Ziplings",
                            "roColor": "blue"
                          },
                          "foil3": "Some Ziplings are sunlight snacks.",
                          "foil3Diag": {
                            "diagramType": "Some",
                            "liText": "Ziplings",
                            "liColor": "blue",
                            "roText": "sunlight snacks",
                            "roColor": "red"
                          }
                        }
                      }]
                    },
                    {
                      "id": "B_2_1_1_2_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_1_2_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "1_1",
                          "trialId": "11205",
                          "stageType": "Strategy",
                          "taskType": "LogicQuest",
                          "questionType": "",
                          "stage": 2,
                          "question": "\"According to the story, which of these statements is true?\"",
                          "answer": "Some Ziplings who don't eat enough in winter will waste away.",
                          "intervention": "CircleDiagrams",
                          "foil1": "No Ziplings who eat enough in winter will waste away.",
                          "foil2": "All Ziplings who don't eat enough in winter will waste away.",
                          "foil3": "Some Ziplings who eat enough in winter will waste away."
                        }
                      }]
                    },
                    {
                      "id": "B_2_1_1_2_6",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_1_2_6_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "6",
                          "passageId": "1_1",
                          "trialId": "11206",
                          "stageType": "Strategy",
                          "taskType": "ChooseDiagram",
                          "questionType": "",
                          "stage": 2,
                          "question": "Select the diagram that illustrates the following statement: Some Ziplings who don't eat enough in winter will waste away.",
                          "intervention": "CircleDiagrams",
                          "answer": "Some Ziplings who don't eat enough in winter will waste away.",
                          "answerDiag": {
                            "diagramType": "Some",
                            "liText": "Ziplings who don't eat enough in winter",
                            "liColor": "yellow",
                            "roText": "Ziplings who waste away in winter",
                            "roColor": "red"
                          },
                          "foil1": "No Ziplings who eat enough in winter will waste away.",
                          "foil1Diag": {
                            "diagramType": "None",
                            "liText": "Ziplings who eat enough in winter",
                            "liColor": "blue",
                            "roText": "Ziplings who waste away in winter",
                            "roColor": "red"
                          },
                          "foil2": "All Ziplings who don't eat enough in winter don't waste away.",
                          "foil2Diag": {
                            "diagramType": "All",
                            "liText": "Ziplings who don't eat enough in winter",
                            "liColor": "yellow",
                            "roText": "Ziplings who don't waste away in winter",
                            "roColor": "green"
                          },
                          "foil3": "Some Ziplings who eat enough in winter will waste away.",
                          "foil3Diag": {
                            "diagramType": "Some",
                            "liText": "Ziplings who eat enough in winter",
                            "liColor": "blue",
                            "roText": "Ziplings who waste away in winter",
                            "roColor": "red"
                          }
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_1_1_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_1_1_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_1_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "1_1",
                          "trialId": "11301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "According to this diagram about the story:",
                          "answer": "All Ziplings have green skin.",
                          "intervention": "CircleDiagrams",
                          "foil1": "All beings with green skin are Ziplings.",
                          "foil2": "There are no green-skinned beings.",
                          "foil3": "No Ziplings have green skin."
                        }
                      }]
                    },
                    {
                      "id": "B_2_1_1_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_1_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "1_1",
                          "trialId": "11302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "According to this diagram about the story:",
                          "answer": "Ziplings sometimes snack on sunlight.",
                          "intervention": "CircleDiagrams",
                          "foil1": "Sunlight is the only snack for a Zipling.",
                          "foil2": "Zipling snacks never include sunlight.",
                          "foil3": "Some sunlight snacks are Ziplings."
                        }
                      }]
                    },
                    {
                      "id": "B_2_1_1_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_1_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "1_1",
                          "trialId": "11303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "According to this diagram about the story:",
                          "answer": "Some Ziplings don't eat enough in winter and waste away.",
                          "intervention": "CircleDiagrams",
                          "foil1": "No Zipling wastes away in the winter.",
                          "foil2": "No Zipling eats well in winter and some Ziplings waste away.",
                          "foil3": "\"Some Ziplings don't waste away, despite eating well in winter.\""
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 100
                }
              ],
              "override": {
                "passageText": [
                  "\"The people of planet Zip are known as Ziplings. Like Earthlings, Ziplings have smooth skin covering their bodies. However, all Ziplings have a greenish tint to their skin. This is because, like many plants on Earth, they utilize photosynthesis. Chemicals in their skin convert solar energy into nutrients.\"",
                  "\"When a Zipling feels hungry, a little time outdoors in the sunlight makes a perfectly good snack. However, they can also eat what we would consider food. They must eat extra food during the winter, when there are less hours of sunlight. Indeed, some Ziplings waste away during the winter because they fail to eat enough food.\""
                ]
              }
            },
            {
              "id": "B_2_1_2",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_1_2_1",
                  "type": "COWNSStage1",
                  "children": [{
                    "id": "B_2_1_2_1_1",
                    "type": "DNWrapper",
                    "children": [{
                      "id": "B_2_1_2_1_1_D",
                      "type": "DataNode",
                      "data": {
                        "viewID": "com.scilearn.DataStream.NormalMechanic",
                        "item": "1",
                        "passageId": "1_2",
                        "trialId": "12101",
                        "stageType": "PreStrat",
                        "taskType": "CompQuest",
                        "questionType": "",
                        "stage": 1,
                        "graphicName": "",
                        "question": "\"Clearly, the sun is a very important part of modern Zipling culture. Which fact from the passage provides the best evidence that Ziplings first became fascinated with the sun long ago?\"",
                        "answer": "The discovery of ancient Zipling ruins showing pictures of the sun.",
                        "intervention": "",
                        "foil1": "Pictures of the sun found painted on cave walls.",
                        "foil2": "The fact that Zipling money features a picture of the sun.",
                        "foil3": "\"the popularity of the holiday that Ziplings call \"\"triumph of the sun.\"\"\"",
                        "pages": [
                          "\"Since sunlight is an important form of food for Ziplings, the sun plays a big role in their culture. Throughout their history, Zipling artists and musicians have been inspired by the sun. Pictures of the sun have been found on some ancient Zipling ruins. A picture of the sun even appears on Zipling money.\"",
                          "\"All of the popular holidays on Zip are held in the spring and summer. Everyone's favorite is an early spring holiday, called \"\"Triumph of the Sun.\"\" It celebrates the lengthening hours of daylight and sunny seasons ahead. The sun influences daily life, too. For example, traditional Zip homes have windows facing all directions.\""
                        ]
                      }
                    }]
                  }]
                },
                {
                  "id": "B_2_1_2_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_1_2_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_2_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "1_2",
                          "trialId": "12201",
                          "stageType": "Strategy",
                          "taskType": "LogicQuest",
                          "questionType": "",
                          "stage": 2,
                          "question": "\"According to the story, which of these statements is true?\"",
                          "answer": "No popular Zipling holidays are winter or fall events.",
                          "intervention": "CircleDiagrams",
                          "foil1": "All popular Zipling holidays are summer or fall events.",
                          "foil2": "All Zipling holidays are spring or summer events.",
                          "foil3": "No Zipling holidays are winter or spring events."
                        }
                      }]
                    },
                    {
                      "id": "B_2_1_2_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_2_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "1_2",
                          "trialId": "12202",
                          "stageType": "Strategy",
                          "taskType": "ChooseDiagram",
                          "questionType": "",
                          "stage": 2,
                          "question": "No popular Zipling holidays are winter or fall events.",
                          "intervention": "CircleDiagrams",
                          "answer": "No popular Zipling holidays are winter or fall events.",
                          "answerDiag": {
                            "diagramType": "None",
                            "liText": "popular Zipling holidays",
                            "liColor": "orange",
                            "roText": "winter or fall events",
                            "roColor": "purple"
                          },
                          "foil1": "No Zipling holidays are winter or spring events.",
                          "foil1Diag": {
                            "diagramType": "None",
                            "liText": "Zipling holidays",
                            "liColor": "blue",
                            "roText": "winter or spring events",
                            "roColor": "yellow"
                          },
                          "foil2": "All Popular Zipling holidays are summer or fall events.",
                          "foil2Diag": {
                            "diagramType": "All",
                            "liText": "popular Zipling holidays",
                            "liColor": "orange",
                            "roText": "summer or fall events",
                            "roColor": "green"
                          },
                          "foil3": "All Zipling holidays are spring or summer events.",
                          "foil3Diag": {
                            "diagramType": "All",
                            "liText": "Zipling holidays",
                            "liColor": "blue",
                            "roText": "spring or summer events",
                            "roColor": "red"
                          }
                        }
                      }]
                    },
                    {
                      "id": "B_2_1_2_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_2_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "1_2",
                          "trialId": "12203",
                          "stageType": "Strategy",
                          "taskType": "LogicQuest",
                          "questionType": "",
                          "stage": 2,
                          "question": "\"According to the story, which of these statements is true?\"",
                          "answer": "Some designs on ancient Zipling ruins are pictures of the sun.",
                          "intervention": "CircleDiagrams",
                          "foil1": "All designs on ancient Zipling ruins are pictures of the sun.",
                          "foil2": "No designs on ancient Zipling ruins are pictures of the sun.",
                          "foil3": "All pictures of the sun are designs on ancient Zipling ruins."
                        }
                      }]
                    },
                    {
                      "id": "B_2_1_2_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_2_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "1_2",
                          "trialId": "12204",
                          "stageType": "Strategy",
                          "taskType": "ChooseDiagram",
                          "questionType": "",
                          "stage": 2,
                          "question": "Select the diagram that illustrates the following statement: Some designs on ancient Zipling ruins are pictures of the sun.",
                          "intervention": "CircleDiagrams",
                          "answer": "Some designs on ancient Zipling ruins are pictures of the sun.",
                          "answerDiag": {
                            "diagramType": "Some",
                            "liText": "designs on ancient Zipling ruins",
                            "liColor": "green",
                            "roText": "pictures of the sun",
                            "roColor": "yellow"
                          },
                          "foil1": "All designs on ancient Zipling ruins are pictures of the sun.",
                          "foil1Diag": {
                            "diagramType": "All",
                            "liText": "designs on Zipling monuments",
                            "liColor": "purple",
                            "roText": "pictures of the sun",
                            "roColor": "yellow"
                          },
                          "foil2": "No designs on ancient Zipling ruins are pictures of the sun.",
                          "foil2Diag": {
                            "diagramType": "No",
                            "liText": "designs on ancient Zipling ruins",
                            "liColor": "green",
                            "roText": "pictures of the sun",
                            "roColor": "yellow"
                          },
                          "foil3": "All pictures of the sun are designs on Zipling monuments.",
                          "foil3Diag": {
                            "diagramType": "All",
                            "liText": "pictures of the sun",
                            "liColor": "yellow",
                            "roText": "designs on Zipling monuments",
                            "roColor": "purple"
                          }
                        }
                      }]
                    },
                    {
                      "id": "B_2_1_2_2_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_2_2_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "1_2",
                          "trialId": "12205",
                          "stageType": "Strategy",
                          "taskType": "LogicQuest",
                          "questionType": "",
                          "stage": 2,
                          "question": "\"According to the story, which of these statements is true?\"",
                          "answer": "All traditional Zipling homes are buildings with windows in all directions.",
                          "intervention": "CircleDiagrams",
                          "foil1": "All buildings with windows in all directions are traditional Zipling homes.",
                          "foil2": "No traditional Zipling homes are buildings with windows in all directions.",
                          "foil3": "No Zipling homes are buildings without windows."
                        }
                      }]
                    },
                    {
                      "id": "B_2_1_2_2_6",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_2_2_6_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "6",
                          "passageId": "1_2",
                          "trialId": "12206",
                          "stageType": "Strategy",
                          "taskType": "ChooseDiagram",
                          "questionType": "",
                          "stage": 2,
                          "question": "Select the diagram that illustrates the following statement: All traditional Zipling homes are buildings with windows in all directions.",
                          "intervention": "CircleDiagrams",
                          "answer": "All traditional Zipling homes are buildings with windows in all directions.",
                          "answerDiag": {
                            "diagramType": "All",
                            "liText": "traditional Zipling homes",
                            "liColor": "blue",
                            "roText": "buildings with windows in all directions",
                            "roColor": "orange"
                          },
                          "foil1": "No traditional Zipling homes are buildings with windows in all directions.",
                          "foil1Diag": {
                            "diagramType": "No",
                            "liText": "traditional Zipling homes",
                            "liColor": "blue",
                            "roText": "buildings with windows in all directions",
                            "roColor": "orange"
                          },
                          "foil2": "No Zipling homes are buildings without windows.",
                          "foil2Diag": {
                            "diagramType": "No",
                            "liText": "Zipling homes",
                            "liColor": "red",
                            "roText": "buildings without windows",
                            "roColor": "yellow"
                          },
                          "foil3": "All buildings with windows in all directions are traditional Zipling homes.",
                          "foil3Diag": {
                            "diagramType": "All",
                            "liText": "buildings with windows in all directions",
                            "liColor": "orange",
                            "roText": "traditional Zipling homes",
                            "roColor": "blue"
                          }
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_1_2_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_1_2_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_2_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "1_2",
                          "trialId": "12301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "According to this diagram about the story:",
                          "answer": "No Zipling holiday that is popular occurs in the winter or fall.",
                          "intervention": "CircleDiagrams",
                          "foil1": "Some popular Zipling holidays occur in the spring and summer.",
                          "foil2": "No holidays happen on Zip in the fall and winter.",
                          "foil3": "\"all Ziplings have a favorite holiday which is \"\"triumph of the sun.\"\"\""
                        }
                      }]
                    },
                    {
                      "id": "B_2_1_2_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_2_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "1_2",
                          "trialId": "12302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "According to this diagram about the story:",
                          "answer": "Pictures of the sun have been found on some ancient Zipling ruins.",
                          "intervention": "CircleDiagrams",
                          "foil1": "All ancient Zipling ruins have been found to have pictures of the sun.",
                          "foil2": "No ancient Zipling ruins have pictures of the sun.",
                          "foil3": "The designs on ancient Zipling ruins are all pictures of the sun."
                        }
                      }]
                    },
                    {
                      "id": "B_2_1_2_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_2_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "1_2",
                          "trialId": "12303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "According to this diagram about the story:",
                          "answer": "Traditional homes on Zip are always built with windows facing all directions.",
                          "intervention": "CircleDiagrams",
                          "foil1": "All windows in a traditional Zipling home will face in the same direction.",
                          "foil2": "No traditional Zipling homes have windows facing the south.",
                          "foil3": "Zipling homes are traditionally built facing a certain direction and have many windows."
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 100
                }
              ],
              "override": {
                "passageText": [
                  "\"Since sunlight is an important form of food for Ziplings, the sun plays a big role in their culture. Throughout their history, Zipling artists and musicians have been inspired by the sun. Pictures of the sun have been found on some ancient Zipling ruins. A picture of the sun even appears on Zipling money.\"",
                  "\"All of the popular holidays on Zip are held in the spring and summer. Everyone's favorite is an early spring holiday, called \"\"Triumph of the Sun.\"\" It celebrates the lengthening hours of daylight and sunny seasons ahead. The sun influences daily life, too. For example, traditional Zip homes have windows facing all directions.\""
                ]
              }
            },
            {
              "id": "B_2_1_3",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_1_3_1",
                  "type": "COWNSStage1",
                  "children": [{
                    "id": "B_2_1_3_1_1",
                    "type": "DNWrapper",
                    "children": [{
                      "id": "B_2_1_3_1_1_D",
                      "type": "DataNode",
                      "data": {
                        "viewID": "com.scilearn.DataStream.NormalMechanic",
                        "item": "1",
                        "passageId": "1_3",
                        "trialId": "13101",
                        "stageType": "PreStrat",
                        "taskType": "CompQuest",
                        "questionType": "",
                        "stage": 1,
                        "graphicName": "",
                        "question": "Where do Zipling glowblobs come from?",
                        "answer": "They are made with a chemical from a sea plant.",
                        "intervention": "",
                        "foil1": "They are harvested on Zipling farms during the night.",
                        "foil2": "They are a kind of fish that is harvested from the sea.",
                        "foil3": "They are given a firm squish to make them glow brightly.",
                        "pages": [
                          "\"Ziplings have always turned to their sun as a source of energy. Their buildings store the sun's heat and stay warm, year-round. They can even use solar power to heat water and produce steam. Sun-based steam power started Zip's first industrial age. Their second industrial age was fueled by solar electricity.\"",
                          "\"Later, the Ziplings discovered a way to have light all night long. They found a sea plant that absorbs sunlight in the day and glows during the night. The Ziplings farm this plant and remove the chemical that glows. They encase the chemical in units called \"\"glowblobs.\"\" Glowblobs glow only faintly, when left alone. But if you squish or squeeze a glowblob, it will glow brightly for about an hour. On Zip, if someone tells you to \"\"hit the light,\"\" they mean it literally!\""
                        ]
                      }
                    }]
                  }]
                },
                {
                  "id": "B_2_1_3_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_1_3_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_3_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "1_3",
                          "trialId": "13201",
                          "stageType": "Strategy",
                          "taskType": "LogicQuest",
                          "questionType": "",
                          "stage": 2,
                          "question": "\"According to the story, which of these statements is true?\"",
                          "answer": "Some sea plants glow at night.",
                          "intervention": "CircleDiagrams",
                          "foil1": "All sea plants glow at night.",
                          "foil2": "No sea plants glow at night.",
                          "foil3": "All things that glow at night are sea plants."
                        }
                      }]
                    },
                    {
                      "id": "B_2_1_3_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_3_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "1_3",
                          "trialId": "13202",
                          "stageType": "Strategy",
                          "taskType": "ChooseDiagram",
                          "questionType": "",
                          "stage": 2,
                          "question": "Select the diagram that illustrates the following statement: Some sea plants glow at night.",
                          "intervention": "CircleDiagrams",
                          "answer": "Some sea plants glow at night.",
                          "answerDiag": {
                            "diagramType": "Some",
                            "liText": "sea plants",
                            "liColor": "yellow",
                            "roText": "plants that glow at night",
                            "roColor": "purple"
                          },
                          "foil1": "All plants that glow at night are sea plants.",
                          "foil1Diag": {
                            "diagramType": "All",
                            "liText": "plants that glow at night",
                            "liColor": "purple",
                            "roText": "sea plants",
                            "roColor": "yellow"
                          },
                          "foil2": "All sea plants glow at night.",
                          "foil2Diag": {
                            "diagramType": "All",
                            "liText": "sea plants",
                            "liColor": "yellow",
                            "roText": "plants that glow at night",
                            "roColor": "purple"
                          },
                          "foil3": "No sea plants glow at night.",
                          "foil3Diag": {
                            "diagramType": "No",
                            "liText": "sea plants",
                            "liColor": "yellow",
                            "roText": "plants that glow at night",
                            "roColor": "purple"
                          }
                        }
                      }]
                    },
                    {
                      "id": "B_2_1_3_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_3_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "1_3",
                          "trialId": "13203",
                          "stageType": "Strategy",
                          "taskType": "LogicQuest",
                          "questionType": "",
                          "stage": 2,
                          "question": "\"According to the story, which of these statements is true?\"",
                          "answer": "All glowblobs glow when you squeeze them.",
                          "intervention": "CircleDiagrams",
                          "foil1": "No things glow when you squeeze them.",
                          "foil2": "Some glowblobs glow when you squeeze them.",
                          "foil3": "All things glow when you squeeze them."
                        }
                      }]
                    },
                    {
                      "id": "B_2_1_3_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_3_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "1_3",
                          "trialId": "13204",
                          "stageType": "Strategy",
                          "taskType": "ChooseDiagram",
                          "questionType": "",
                          "stage": 2,
                          "question": "Select the diagram that illustrates the following statement: All glowblobs glow when you squeeze them.",
                          "intervention": "CircleDiagrams",
                          "answer": "All glowblobs glow when you squeeze them.",
                          "answerDiag": {
                            "diagramType": "All",
                            "liText": "glowblobs",
                            "liColor": "green",
                            "roText": "things that glow when you squeeze them",
                            "roColor": "purple"
                          },
                          "foil1": "Some glowblobs glow when you squeeze them.",
                          "foil1Diag": {
                            "diagramType": "Some",
                            "liText": "things that glow when you squeeze them",
                            "liColor": "purple",
                            "roText": "glowblobs",
                            "roColor": "green"
                          },
                          "foil2": "No things glow when you squeeze them.",
                          "foil2Diag": {
                            "diagramType": "No",
                            "liText": "things that glow when you squeeze them",
                            "liColor": "purple",
                            "roText": "things",
                            "roColor": "yellow"
                          },
                          "foil3": "All things glow when you squeeze them.",
                          "foil3Diag": {
                            "diagramType": "All",
                            "liText": "things",
                            "liColor": "yellow",
                            "roText": "things that glow when you squeeze them",
                            "roColor": "purple"
                          }
                        }
                      }]
                    },
                    {
                      "id": "B_2_1_3_2_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_3_2_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "1_3",
                          "trialId": "13205",
                          "stageType": "Strategy",
                          "taskType": "LogicQuest",
                          "questionType": "",
                          "stage": 2,
                          "question": "\"According to the story, which of these statements is true on Zip just like it is on Earth?\"",
                          "answer": "All steam is water.",
                          "intervention": "CircleDiagrams",
                          "foil1": "No steam is hot.",
                          "foil2": "All water is steam.",
                          "foil3": "No water is steam."
                        }
                      }]
                    },
                    {
                      "id": "B_2_1_3_2_6",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_3_2_6_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "6",
                          "passageId": "1_3",
                          "trialId": "13206",
                          "stageType": "Strategy",
                          "taskType": "ChooseDiagram",
                          "questionType": "",
                          "stage": 2,
                          "question": "Select the diagram that illustrates the following statement: All steam is water.",
                          "intervention": "CircleDiagrams",
                          "answer": "All steam is water.",
                          "answerDiag": {
                            "diagramType": "All",
                            "liText": "steam",
                            "liColor": "yellow",
                            "roText": "water",
                            "roColor": "blue"
                          },
                          "foil1": "All water is steam.",
                          "foil1Diag": {
                            "diagramType": "All",
                            "liText": "water",
                            "liColor": "blue",
                            "roText": "steam",
                            "roColor": "yellow"
                          },
                          "foil2": "No water is steam.",
                          "foil2Diag": {
                            "diagramType": "No",
                            "liText": "water",
                            "liColor": "blue",
                            "roText": "steam",
                            "roColor": "yellow"
                          },
                          "foil3": "Some steam is hot.",
                          "foil3Diag": {
                            "diagramType": "Some",
                            "liText": "steam",
                            "liColor": "yellow",
                            "roText": "things that are hot",
                            "roColor": "red"
                          }
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_1_3_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_1_3_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_3_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "1_3",
                          "trialId": "13301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "According to this diagram about the story:",
                          "answer": "All glowblobs glow when you squeeze them.",
                          "intervention": "CircleDiagrams",
                          "foil1": "Some glowblobs glow when you do not squeeze them.",
                          "foil2": "All things glow when you squeeze them.",
                          "foil3": "Nothing glows when you squeeze it."
                        }
                      }]
                    },
                    {
                      "id": "B_2_1_3_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_3_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "1_3",
                          "trialId": "13302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "According to this diagram about the story:",
                          "answer": "No glowblobs run on electricity.",
                          "intervention": "CircleDiagrams",
                          "foil1": "All things that run on electricity are glowblobs.",
                          "foil2": "Some glowblobs run on electricity.",
                          "foil3": "Glowblobs need some form of energy."
                        }
                      }]
                    },
                    {
                      "id": "B_2_1_3_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_3_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "1_3",
                          "trialId": "13303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "According to this diagram about the story:",
                          "answer": "Some steam is hot.",
                          "intervention": "CircleDiagrams",
                          "foil1": "All steam is hot.",
                          "foil2": "No steam is hot.",
                          "foil3": "All steam is cold."
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 100
                }
              ],
              "override": {
                "passageText": [
                  "\"Ziplings have always turned to their sun as a source of energy. Their buildings store the sun's heat and stay warm, year-round. They can even use solar power to heat water and produce steam. Sun-based steam power started Zip's first industrial age. Their second industrial age was fueled by solar electricity.\"",
                  "\"Later, the Ziplings discovered a way to have light all night long. They found a sea plant that absorbs sunlight in the day and glows during the night. The Ziplings farm this plant and remove the chemical that glows. They encase the chemical in units called \"\"glowblobs.\"\" Glowblobs glow only faintly, when left alone. But if you squish or squeeze a glowblob, it will glow brightly for about an hour. On Zip, if someone tells you to \"\"hit the light,\"\" they mean it literally!\""
                ]
              }
            },
            {
              "id": "B_2_1_4",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_1_4_1",
                  "type": "COWNSStage1",
                  "children": [{
                    "id": "B_2_1_4_1_1",
                    "type": "DNWrapper",
                    "children": [{
                      "id": "B_2_1_4_1_1_D",
                      "type": "DataNode",
                      "data": {
                        "viewID": "com.scilearn.DataStream.NormalMechanic",
                        "item": "1",
                        "passageId": "1_4",
                        "trialId": "14101",
                        "stageType": "PreStrat",
                        "taskType": "CompQuest",
                        "questionType": "",
                        "stage": 1,
                        "graphicName": "",
                        "question": "\"What is \"\"grid sprawl\"\"?\"",
                        "answer": "Too many power grids creating shadows.",
                        "intervention": "",
                        "foil1": "Zipling leaders creating too many power grids.",
                        "foil2": "Not enough grids creating power for Ziplings.",
                        "foil3": "Too many shadows on power grids.",
                        "pages": [
                          "\"At least once, Zip's use of sunlight led to conflict. It happened near the end of Zip's second industrial age. New inventions caused rapid economic growth. Rapid growth led to increased electricity use. This, in turn, led to a boom in building solar generation grids.\"",
                          "\"Solar grids sprouted up everywhere in Zipling towns. Grids placed on rooftops were shading streets, plazas, and neighboring homes. Conflict began over \"\"grid sprawl.\"\" The courts were filled with cases about who could shade who. A popular campaign started with the slogan, \"\"Don't shade me out!\"\" The leaders of Zip were worried by this conflict. They called for the development of new, shade-free energy sources.\""
                        ]
                      }
                    }]
                  }]
                },
                {
                  "id": "B_2_1_4_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_1_4_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_4_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "1_4",
                          "trialId": "14201",
                          "stageType": "Strategy",
                          "taskType": "LogicQuest",
                          "questionType": "",
                          "stage": 2,
                          "question": "\"According to the story, which of these statements is true?\"",
                          "answer": "All rooftop solar grids create shade.",
                          "intervention": "CircleDiagrams",
                          "foil1": "All shade is created by rooftop solar grids.",
                          "foil2": "All sunlight is created by rooftop solar grids.",
                          "foil3": "All rooftop solar grids create sunlight."
                        }
                      }]
                    },
                    {
                      "id": "B_2_1_4_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_4_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "1_4",
                          "trialId": "14202",
                          "stageType": "Strategy",
                          "taskType": "ChooseDiagram",
                          "questionType": "",
                          "stage": 2,
                          "question": "All rooftop solar grids create shade.",
                          "intervention": "CircleDiagrams",
                          "answer": "All rooftop solar grids create shade.",
                          "answerDiag": {
                            "diagramType": "All",
                            "liText": "rooftop solar grids",
                            "liColor": "yellow",
                            "roText": "things that create shade",
                            "roColor": "purple"
                          },
                          "foil1": "Select the diagram that illustrates the following statement: All sunlight is created by rooftop solar grids.",
                          "foil1Diag": {
                            "diagramType": "All",
                            "liText": "things that create sunlight",
                            "liColor": "orange",
                            "roText": "rooftop solar grids",
                            "roColor": "yellow"
                          },
                          "foil2": "All rooftop solar grids create sunlight.",
                          "foil2Diag": {
                            "diagramType": "All",
                            "liText": "rooftop solar grids",
                            "liColor": "yellow",
                            "roText": "things that create sunlight",
                            "roColor": "orange"
                          },
                          "foil3": "All shade is created by rooftop solar grids.",
                          "foil3Diag": {
                            "diagramType": "All",
                            "liText": "things that create shade",
                            "liColor": "purple",
                            "roText": "rooftop solar grids",
                            "roColor": "yellow"
                          }
                        }
                      }]
                    },
                    {
                      "id": "B_2_1_4_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_4_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "1_4",
                          "trialId": "14203",
                          "stageType": "Strategy",
                          "taskType": "LogicQuest",
                          "questionType": "",
                          "stage": 2,
                          "question": "\"According to the story, which of these statements is true?\"",
                          "answer": "Some uses of sunlight led to conflict.",
                          "intervention": "CircleDiagrams",
                          "foil1": "No uses of sunlight led to conflict.",
                          "foil2": "All conflict was created by uses of sunlight.",
                          "foil3": "All uses of sunlight caused conflict."
                        }
                      }]
                    },
                    {
                      "id": "B_2_1_4_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_4_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "1_4",
                          "trialId": "14204",
                          "stageType": "Strategy",
                          "taskType": "ChooseDiagram",
                          "questionType": "",
                          "stage": 2,
                          "question": "Select the diagram that illustrates the following statement: Some uses of sunlight led to conflict.",
                          "intervention": "CircleDiagrams",
                          "answer": "some uses of sunlight led to conflict",
                          "answerDiag": {
                            "diagramType": "Some",
                            "liText": "uses of sunlight",
                            "liColor": "blue",
                            "roText": "conflicts",
                            "roColor": "red"
                          },
                          "foil1": "No uses of sunlight led to conflict.",
                          "foil1Diag": {
                            "diagramType": "No",
                            "liText": "uses of sunlight",
                            "liColor": "blue",
                            "roText": "conflicts",
                            "roColor": "red"
                          },
                          "foil2": "All conflict was created by uses of sunlight.",
                          "foil2Diag": {
                            "diagramType": "All",
                            "liText": "conflicts",
                            "liColor": "red",
                            "roText": "uses of sunlight",
                            "roColor": "blue"
                          },
                          "foil3": "All uses of sunlight caused conflict.",
                          "foil3Diag": {
                            "diagramType": "All",
                            "liText": "uses of sunlight",
                            "liColor": "blue",
                            "roText": "conflicts",
                            "roColor": "red"
                          }
                        }
                      }]
                    },
                    {
                      "id": "B_2_1_4_2_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_4_2_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "1_4",
                          "trialId": "14205",
                          "stageType": "Strategy",
                          "taskType": "LogicQuest",
                          "questionType": "",
                          "stage": 2,
                          "question": "\"According to the story, which of these statements is true?\"",
                          "answer": "All leaders were worried.",
                          "intervention": "CircleDiagrams",
                          "foil1": "No leaders asked for new energy sources.",
                          "foil2": "Some leaders were not worried.",
                          "foil3": "Some old energy sources were shade-free."
                        }
                      }]
                    },
                    {
                      "id": "B_2_1_4_2_6",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_4_2_6_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "6",
                          "passageId": "1_4",
                          "trialId": "14206",
                          "stageType": "Strategy",
                          "taskType": "ChooseDiagram",
                          "questionType": "",
                          "stage": 2,
                          "question": "Select the diagram that illustrates the following statement: All leaders were worried.",
                          "intervention": "CircleDiagrams",
                          "answer": "All leaders were worried.",
                          "answerDiag": {
                            "diagramType": "All",
                            "liText": "leaders",
                            "liColor": "orange",
                            "roText": "people who were worried",
                            "roColor": "blue"
                          },
                          "foil1": "No leaders asked for new energy sources.",
                          "foil1Diag": {
                            "diagramType": "None",
                            "liText": "leaders",
                            "liColor": "orange",
                            "roText": "people who asked for new energy sources",
                            "roColor": "yellow"
                          },
                          "foil2": "Some leaders were not worried.",
                          "foil2Diag": {
                            "diagramType": "Some",
                            "liText": "leaders",
                            "liColor": "orange",
                            "roText": "people who were not worried",
                            "roColor": "green"
                          },
                          "foil3": "Some old energy sources were shade-free.",
                          "foil3Diag": {
                            "diagramType": "Some",
                            "liText": "old energy sources",
                            "liColor": "purple",
                            "roText": "shade-free energy sources",
                            "roColor": "red"
                          }
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_1_4_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_1_4_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_4_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "1_4",
                          "trialId": "14301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "According to this diagram about the story:",
                          "answer": "Rooftop solar grids all create shade.",
                          "intervention": "CircleDiagrams",
                          "foil1": "Shade is always due to rooftop solar grids.",
                          "foil2": "Sunlight is always due to rooftop solar grids.",
                          "foil3": "Rooftop solar grids all create sunlight."
                        }
                      }]
                    },
                    {
                      "id": "B_2_1_4_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_4_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "1_4",
                          "trialId": "14302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "According to this diagram about the story:",
                          "answer": "Some uses of sunlight led to conflict.",
                          "intervention": "CircleDiagrams",
                          "foil1": "No uses of sunlight led to conflict.",
                          "foil2": "All conflict was created by uses of sunlight.",
                          "foil3": "All uses of sunlight caused conflict."
                        }
                      }]
                    },
                    {
                      "id": "B_2_1_4_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_1_4_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "1_4",
                          "trialId": "14303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "According to this diagram about the story:",
                          "answer": "All of the leaders asked for new energy sources.",
                          "intervention": "CircleDiagrams",
                          "foil1": "Some of the leaders did not ask for new energy sources.",
                          "foil2": "None of the leaders asked for new energy sources.",
                          "foil3": "All of the people who asked for new energy sources were leaders."
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 100
                }
              ],
              "override": {
                "passageText": [
                  "\"At least once, Zip's use of sunlight led to conflict. It happened near the end of Zip's second industrial age. New inventions caused rapid economic growth. Rapid growth led to increased electricity use. This, in turn, led to a boom in building solar generation grids.\"",
                  "\"Solar grids sprouted up everywhere in Zipling towns. Grids placed on rooftops were shading streets, plazas, and neighboring homes. Conflict began over \"\"grid sprawl.\"\" The courts were filled with cases about who could shade who. A popular campaign started with the slogan, \"\"Don't shade me out!\"\" The leaders of Zip were worried by this conflict. They called for the development of new, shade-free energy sources.\""
                ]
              }
            }
          ]
        },
        {
          "id": "B_2_2",
          "type": "COWNSLevel",
          "description": "Level 2 Node",
          "override": {
            "level": 2
          },
          "children": [{
              "id": "B_2_2_1",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_2_1_1",
                  "type": "COWNSStage1",
                  "children": [{
                    "id": "B_2_2_1_1_1",
                    "type": "DNWrapper",
                    "children": [{
                      "id": "B_2_2_1_1_1_D",
                      "type": "DataNode",
                      "data": {
                        "viewID": "com.scilearn.DataStream.NormalMechanic",
                        "item": "1",
                        "passageId": "2_1",
                        "trialId": "21101",
                        "stageType": "PreStrat",
                        "taskType": "CompQuest",
                        "questionType": "",
                        "stage": 1,
                        "graphicName": "",
                        "question": "\"What does having a high \"\"quality of light\"\" mean to Zipling architects?\"",
                        "answer": "plenty of direct sunlight indoors",
                        "intervention": "",
                        "foil1": "bright lights that lift the spirits",
                        "foil2": "\"even, indirect light from a north-facing window\"",
                        "foil3": "a positive and healthy lifestyle",
                        "pages": [
                          "\"All Ziplings prefer homes that are lit with direct sunlight. However, some must settle for less sunny homes. This is most often a problem for city dwellers. City apartments might only have windows on two or three sides! Still, the demand for sun-filled rooms has shaped Zipling skylines.  \"",
                          "\"On Earth, most buildings are shaped like boxes.  Not so on Zip!  Their buildings come in wildly different shapes. Furthermore, city blocks are designed around waterways, courtyards, and greens. Then the buildings are carefully positioned for the best light. Zipling architects strive to design large buildings with a high \"\"quality of light\"\" for residents. The buildings that win their architectural prizes always meet this ideal.\""
                        ]
                      }
                    }]
                  }]
                },
                {
                  "id": "B_2_2_1_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_2_1_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_2_1_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "2_1",
                          "trialId": "21201",
                          "stageType": "Strategy",
                          "taskType": "BuildDiagram",
                          "questionType": "",
                          "stage": 2,
                          "graphicName": "",
                          "correctDiagram": "",
                          "answer": "Select the missing text for circle 1 to illustrate the following statement: All prize-winning buildings are sunny.",
                          "intervention": "CircleDiagrams",
                          "foil1": "sunny buildings",
                          "foil2": "prize winners",
                          "foil3": "winning architects"
                        }
                      }]
                    },
                    {
                      "id": "B_2_2_1_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_2_1_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "2_1",
                          "trialId": "21202",
                          "stageType": "Strategy",
                          "taskType": "BuildDiagram",
                          "questionType": "",
                          "stage": 2,
                          "graphicName": "",
                          "correctDiagram": "",
                          "answer": "Select the missing text for circle 2 to illustrate the following statement: All prize-winning buildings are sunny.",
                          "intervention": "CircleDiagrams",
                          "foil1": "prize winners",
                          "foil2": "sunny buildings",
                          "foil3": "winning architects"
                        }
                      }]
                    },
                    {
                      "id": "B_2_2_1_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_2_1_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "2_1",
                          "trialId": "21203",
                          "stageType": "Strategy",
                          "taskType": "BuildDiagram",
                          "questionType": "",
                          "stage": 2,
                          "graphicName": "",
                          "correctDiagram": "",
                          "answer": "Select the missing text for circle 1 to illustrate the following statement: Some city blocks on Zip are designed around waterways.",
                          "intervention": "CircleDiagrams",
                          "foil1": "city blocks on Zip",
                          "foil2": "waterways on Earth",
                          "foil3": "city blocks on Earth"
                        }
                      }]
                    },
                    {
                      "id": "B_2_2_1_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_2_1_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "2_1",
                          "trialId": "21204",
                          "stageType": "Strategy",
                          "taskType": "BuildDiagram",
                          "questionType": "",
                          "stage": 2,
                          "graphicName": "",
                          "correctDiagram": "",
                          "answer": "Select the missing text for circle 1 to illustrate the following statement: No Zipling wants a sunless home.",
                          "intervention": "CircleDiagrams",
                          "foil1": "sunless homes",
                          "foil2": "sunny homes",
                          "foil3": "city apartments"
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_2_1_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_2_1_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_2_1_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "2_1",
                          "trialId": "21301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "According to this diagram about the story:",
                          "answer": "Only sunny buildings win prizes.",
                          "intervention": "CircleDiagrams",
                          "foil1": "All architects who work in sunny buildings win prizes.",
                          "foil2": "Only prize-winning buildings are sunny.",
                          "foil3": "Some prize winners are not sunny buildings."
                        }
                      }]
                    },
                    {
                      "id": "B_2_2_1_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_2_1_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "2_1",
                          "trialId": "21302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "According to this diagram about the story:",
                          "answer": "\"On Zip, some city blocks are designed around waterways.\"",
                          "intervention": "CircleDiagrams",
                          "foil1": "No city blocks on Zip are designed around waterways.",
                          "foil2": "\"On Zip, all city blocks are designed around waterways.\"",
                          "foil3": "Everything on Zip that is designed around waterways is a city block."
                        }
                      }]
                    },
                    {
                      "id": "B_2_2_1_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_2_1_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "2_1",
                          "trialId": "21303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "According to this diagram about the story:",
                          "answer": "No Zipling wants a sunless home.",
                          "intervention": "CircleDiagrams",
                          "foil1": "No Ziplings want city apartments.",
                          "foil2": "All Ziplings want homes.",
                          "foil3": "All Ziplings want shady homes."
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 100
                }
              ],
              "override": {
                "passageText": [
                  "\"All Ziplings prefer homes that are lit with direct sunlight. However, some must settle for less sunny homes. This is most often a problem for city dwellers. City apartments might only have windows on two or three sides! Still, the demand for sun-filled rooms has shaped Zipling skylines.  \"",
                  "\"On Earth, most buildings are shaped like boxes.  Not so on Zip!  Their buildings come in wildly different shapes. Furthermore, city blocks are designed around waterways, courtyards, and greens. Then the buildings are carefully positioned for the best light. Zipling architects strive to design large buildings with a high \"\"quality of light\"\" for residents. The buildings that win their architectural prizes always meet this ideal.\""
                ]
              }
            },
            {
              "id": "B_2_2_2",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_2_2_1",
                  "type": "COWNSStage1",
                  "children": [{
                    "id": "B_2_2_2_1_1",
                    "type": "DNWrapper",
                    "children": [{
                      "id": "B_2_2_2_1_1_D",
                      "type": "DataNode",
                      "data": {
                        "viewID": "com.scilearn.DataStream.NormalMechanic",
                        "item": "1",
                        "passageId": "2_2",
                        "trialId": "22101",
                        "stageType": "PreStrat",
                        "taskType": "CompQuest",
                        "questionType": "",
                        "stage": 1,
                        "graphicName": "",
                        "question": "Why do zooks lie on solar panels?",
                        "answer": "\"The panels are warm, sunny places.\"",
                        "intervention": "",
                        "foil1": "The panels convert sunlight into energy.",
                        "foil2": "Zipling culture is based on the sun.",
                        "foil3": "It is the zooks' breeding season.",
                        "pages": [
                          "\"Since so much Zipling culture is based on the sun, you might expect them to keep pets that share that love. You would not be disappointed.\"",
                          "\"The most popular pet on Zip is the zook. Zooks do share the Ziplings' love of the sun. You can find the furry animals curled up in warm, sunny places: on roofs, near warm windows, and even on solar panels.\"",
                          "\"Since zooks block the sun from solar panels, they can stop the panels from functioning well. During breeding season, all of the young zooks climb the solar panels and lie on them. Sometimes it gets so bad that Ziplings use tall brooms to shoo the zooks off the panels. This does little good, however; they scatter for a while and then return to their cozy perches.\""
                        ]
                      }
                    }]
                  }]
                },
                {
                  "id": "B_2_2_2_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_2_2_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_2_2_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "2_2",
                          "trialId": "22201",
                          "stageType": "Strategy",
                          "taskType": "BuildDiagram",
                          "questionType": "",
                          "stage": 2,
                          "graphicName": "",
                          "correctDiagram": "",
                          "answer": "Select the missing text for circle 1 to illustrate the following statement: Some zooks are Zipling pets.",
                          "intervention": "CircleDiagrams",
                          "foil1": "Zipling pets",
                          "foil2": "solar panels",
                          "foil3": "Ziplings"
                        }
                      }]
                    },
                    {
                      "id": "B_2_2_2_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_2_2_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "2_2",
                          "trialId": "22202",
                          "stageType": "Strategy",
                          "taskType": "BuildDiagram",
                          "questionType": "",
                          "stage": 2,
                          "graphicName": "",
                          "correctDiagram": "",
                          "answer": "Select the missing text for circle 1 to illustrate the following statement: All young zooks lie on solar panels.",
                          "intervention": "CircleDiagrams",
                          "foil1": "things that lie on solar panels",
                          "foil2": "young zooks",
                          "foil3": "solar panels"
                        }
                      }]
                    },
                    {
                      "id": "B_2_2_2_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_2_2_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "2_2",
                          "trialId": "22203",
                          "stageType": "Strategy",
                          "taskType": "BuildDiagram",
                          "questionType": "",
                          "stage": 2,
                          "graphicName": "",
                          "correctDiagram": "",
                          "answer": "Select the missing text for circle 2 to illustrate the following statement: All young zooks lie on solar panels.",
                          "intervention": "CircleDiagrams",
                          "foil1": "young zooks",
                          "foil2": "things that lie on solar panels",
                          "foil3": "solar panels"
                        }
                      }]
                    },
                    {
                      "id": "B_2_2_2_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_2_2_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "2_2",
                          "trialId": "22204",
                          "stageType": "Strategy",
                          "taskType": "BuildDiagram",
                          "questionType": "",
                          "stage": 2,
                          "graphicName": "",
                          "correctDiagram": "",
                          "answer": "Select the missing text for circle 1 to illustrate the following statement: Letting zooks lie on solar panels prevents the panels from working well.",
                          "intervention": "CircleDiagrams",
                          "foil1": "letting zooks lie on solar panels",
                          "foil2": "letting zooks lie in sunny windows",
                          "foil3": "using brooms to shoo zooks off solar panels"
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_2_2_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_2_2_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_2_2_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "2_2",
                          "trialId": "22301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "According to this diagram about the story:",
                          "answer": "Some of the pets that Ziplings keep are zooks.",
                          "intervention": "CircleDiagrams",
                          "foil1": "All zooks are pets kept by Ziplings.",
                          "foil2": "Not all zooks that are kept as pets are Ziplings.",
                          "foil3": "No zooks are ever kept as Zipling pets."
                        }
                      }]
                    },
                    {
                      "id": "B_2_2_2_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_2_2_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "2_2",
                          "trialId": "22302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "According to this diagram about the story:",
                          "answer": "All young zooks lie on solar panels.",
                          "intervention": "CircleDiagrams",
                          "foil1": "Only young zooks lie on solar panels.",
                          "foil2": "Some young zooks do not lie on solar panels.",
                          "foil3": "No things that lie on solar panels are young zooks."
                        }
                      }]
                    },
                    {
                      "id": "B_2_2_2_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_2_2_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "2_2",
                          "trialId": "22303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "According to this diagram about the story:",
                          "answer": "Letting zooks lie on them does not help solar panels work well.",
                          "intervention": "CircleDiagrams",
                          "foil1": "\"All Ziplings let zooks lie on solar panels, regardless of the effect.\"",
                          "foil2": "Some solar panels work better when zooks lie on them and provide insulation.",
                          "foil3": "Solar panels are always kept working well by not letting zooks on them."
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 100
                }
              ],
              "override": {
                "passageText": [
                  "\"Since so much Zipling culture is based on the sun, you might expect them to keep pets that share that love. You would not be disappointed.\"",
                  "\"The most popular pet on Zip is the zook. Zooks do share the Ziplings' love of the sun. You can find the furry animals curled up in warm, sunny places: on roofs, near warm windows, and even on solar panels.\"",
                  "\"Since zooks block the sun from solar panels, they can stop the panels from functioning well. During breeding season, all of the young zooks climb the solar panels and lie on them. Sometimes it gets so bad that Ziplings use tall brooms to shoo the zooks off the panels. This does little good, however; they scatter for a while and then return to their cozy perches.\""
                ]
              }
            },
            {
              "id": "B_2_2_3",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_2_3_1",
                  "type": "COWNSStage1",
                  "children": [{
                    "id": "B_2_2_3_1_1",
                    "type": "DNWrapper",
                    "children": [{
                      "id": "B_2_2_3_1_1_D",
                      "type": "DataNode",
                      "data": {
                        "viewID": "com.scilearn.DataStream.NormalMechanic",
                        "item": "1",
                        "passageId": "2_3",
                        "trialId": "23101",
                        "stageType": "PreStrat",
                        "taskType": "CompQuest",
                        "questionType": "",
                        "stage": 1,
                        "graphicName": "",
                        "question": "Why do some Ziplings join the Zipling Water Club?",
                        "answer": "to have adventures",
                        "intervention": "",
                        "foil1": "to learn to swim",
                        "foil2": "to have bad luck",
                        "foil3": "to support their children's adventurous spirit",
                        "pages": [
                          "\"No Ziplings are able to swim. A few do manage to float a bit. However, their arms are too short to swim well. Few will venture into the water. Many Ziplings even believe that it is bad luck to be too close to lakes.\"",
                          "\"However, the bravest Ziplings build boats and sail them on lakes. These are usually young adults, and all of them yearn for adventure. Most large Zip cities have a branch of the Zipling Water Club with several active members. This can worry their parents, but most support their children's adventurous spirit. \""
                        ]
                      }
                    }]
                  }]
                },
                {
                  "id": "B_2_2_3_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_2_3_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_2_3_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "2_3",
                          "trialId": "23201",
                          "stageType": "Strategy",
                          "taskType": "BuildDiagram",
                          "questionType": "",
                          "stage": 2,
                          "graphicName": "",
                          "correctDiagram": "",
                          "answer": "Select the missing text for circle 1 to illustrate the following statement: All Zipling Water Club members yearn for adventure.",
                          "intervention": "CircleDiagrams",
                          "foil1": "Ziplings who yearn for adventure",
                          "foil2": "Zipling water club members",
                          "foil3": "Ziplings"
                        }
                      }]
                    },
                    {
                      "id": "B_2_2_3_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_2_3_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "2_3",
                          "trialId": "23202",
                          "stageType": "Strategy",
                          "taskType": "BuildDiagram",
                          "questionType": "",
                          "stage": 2,
                          "graphicName": "",
                          "correctDiagram": "",
                          "answer": "Select the missing text for circle 2 to illustrate the following statement: All Zipling Water Club members yearn for adventure.",
                          "intervention": "CircleDiagrams",
                          "foil1": "Zipling water club members",
                          "foil2": "Ziplings who yearn for adventure",
                          "foil3": "Ziplings"
                        }
                      }]
                    },
                    {
                      "id": "B_2_2_3_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_2_3_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "2_3",
                          "trialId": "23203",
                          "stageType": "Strategy",
                          "taskType": "BuildDiagram",
                          "questionType": "",
                          "stage": 2,
                          "graphicName": "",
                          "correctDiagram": "",
                          "answer": "Select the missing text for circle 1 to illustrate the following statement: Some Zipling parents support adventurous youth.",
                          "intervention": "CircleDiagrams",
                          "foil1": "Zipling parents",
                          "foil2": "Ziplings who oppose swimming and boating",
                          "foil3": "many large Zip cities"
                        }
                      }]
                    },
                    {
                      "id": "B_2_2_3_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_2_3_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "2_3",
                          "trialId": "23204",
                          "stageType": "Strategy",
                          "taskType": "BuildDiagram",
                          "questionType": "",
                          "stage": 2,
                          "graphicName": "",
                          "correctDiagram": "",
                          "answer": "Select the missing text for circle 1 to illustrate the following statement: No Ziplings know how to swim.",
                          "intervention": "CircleDiagrams",
                          "foil1": "beings who know how to swim",
                          "foil2": "beings who enjoy boating",
                          "foil3": "adventurous young adults"
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_2_3_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_2_3_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_2_3_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "2_3",
                          "trialId": "23301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "According to this diagram about the story:",
                          "answer": "Only those who yearn for adventure become Zipling Water Club members.",
                          "intervention": "CircleDiagrams",
                          "foil1": "Only Zipling Water Club members yearn for adventure.",
                          "foil2": "All those who yearn for adventure become Zipling Water Club members.",
                          "foil3": "Some Zipling Water Club members do not yearn for adventure."
                        }
                      }]
                    },
                    {
                      "id": "B_2_2_3_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_2_3_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "2_3",
                          "trialId": "23302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "According to this diagram about the story:",
                          "answer": "Some Zipling parents support their children's adventures.",
                          "intervention": "CircleDiagrams",
                          "foil1": "Not all Zipling parents are supported by their children's adventures.",
                          "foil2": "All Zipling parents support their children's adventures.",
                          "foil3": "Some Ziplings are supported by their children's adventures."
                        }
                      }]
                    },
                    {
                      "id": "B_2_2_3_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_2_3_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "2_3",
                          "trialId": "23303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "According to this diagram about the story:",
                          "answer": "no Zipling knows how to swim",
                          "intervention": "CircleDiagrams",
                          "foil1": "some Ziplings know how to swim",
                          "foil2": "all Ziplings know how to swim",
                          "foil3": "all those who know how to swim are Ziplings"
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 100
                }
              ],
              "override": {
                "passageText": [
                  "\"No Ziplings are able to swim. A few do manage to float a bit. However, their arms are too short to swim well. Few will venture into the water. Many Ziplings even believe that it is bad luck to be too close to lakes.\"",
                  "\"However, the bravest Ziplings build boats and sail them on lakes. These are usually young adults, and all of them yearn for adventure. Most large Zip cities have a branch of the Zipling Water Club with several active members. This can worry their parents, but most support their children's adventurous spirit. \""
                ]
              }
            },
            {
              "id": "B_2_2_4",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_2_4_1",
                  "type": "COWNSStage1",
                  "children": [{
                    "id": "B_2_2_4_1_1",
                    "type": "DNWrapper",
                    "children": [{
                      "id": "B_2_2_4_1_1_D",
                      "type": "DataNode",
                      "data": {
                        "viewID": "com.scilearn.DataStream.NormalMechanic",
                        "item": "1",
                        "passageId": "2_4",
                        "trialId": "24101",
                        "stageType": "PreStrat",
                        "taskType": "CompQuest",
                        "questionType": "",
                        "stage": 1,
                        "graphicName": "",
                        "question": "Why do players knock their opponents' glowblobs off the field?",
                        "answer": "because glowblobs that go off the field lose points",
                        "intervention": "",
                        "foil1": "to move them closer to the targets",
                        "foil2": "so they can run around the field more easily",
                        "foil3": "to give their opponents points",
                        "pages": [
                          "\"Ziplings of all ages play glowroll. Glowroll is a sport where players roll glowblobs toward targets. Some of the glowblobs hit their targets and fall into holes. Players get points when their glowblobs hit the targets. Glowblobs that miss stay on the glowfield, and can be knocked off by the opponent's glowblob. Players lose points if their glowblobs roll all the way off the field.\"",
                          "\"Almost all Ziplings play some version of glowroll. Young and old Ziplings play a very slow game where they stay on the edge of the field. The more active Ziplings play a more active version of the game. Here, they run around the field using brooms to push their glowblobs toward the holes. So many Ziplings play glowroll that large glowroll tournaments can last almost a week.\""
                        ]
                      }
                    }]
                  }]
                },
                {
                  "id": "B_2_2_4_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_2_4_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_2_4_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "2_4",
                          "trialId": "24201",
                          "stageType": "Strategy",
                          "taskType": "BuildDiagram",
                          "questionType": "",
                          "stage": 2,
                          "graphicName": "",
                          "correctDiagram": "",
                          "answer": "Select the missing text for circle 1 to illustrate the following statement: Some glowblobs hit their targets.",
                          "intervention": "CircleDiagrams",
                          "foil1": "things that hit their targets",
                          "foil2": "things that pop out of holes",
                          "foil3": "targets that are off the field"
                        }
                      }]
                    },
                    {
                      "id": "B_2_2_4_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_2_4_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "2_4",
                          "trialId": "24202",
                          "stageType": "Strategy",
                          "taskType": "BuildDiagram",
                          "questionType": "",
                          "stage": 2,
                          "graphicName": "",
                          "correctDiagram": "",
                          "answer": "Select the missing text for circle 1 to illustrate the following statement: Some Ziplings play the more active glowroll game.",
                          "intervention": "CircleDiagrams",
                          "foil1": "players of the more active glowroll game",
                          "foil2": "players who push other players off the field with brooms",
                          "foil3": "players who lose points when their glowblobs fall into holes"
                        }
                      }]
                    },
                    {
                      "id": "B_2_2_4_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_2_4_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "2_4",
                          "trialId": "24203",
                          "stageType": "Strategy",
                          "taskType": "BuildDiagram",
                          "questionType": "",
                          "stage": 2,
                          "graphicName": "",
                          "correctDiagram": "",
                          "answer": "Select the missing text for circle 1 to illustrate the following statement: Glowblobs that roll off the field get no points.",
                          "intervention": "CircleDiagrams",
                          "foil1": "things that get points",
                          "foil2": "things that lose points",
                          "foil3": "glowblobs hit by opponents' glowblobs"
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_2_4_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_2_4_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_2_4_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "2_4",
                          "trialId": "24301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "According to this diagram about the story:",
                          "answer": "Some glowblobs hit their targets.",
                          "intervention": "CircleDiagrams",
                          "foil1": "No things that hit their targets are glowblobs.",
                          "foil2": "Some players hit their glowblobs.",
                          "foil3": "All glowblobs hit their targets."
                        }
                      }]
                    },
                    {
                      "id": "B_2_2_4_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_2_4_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "2_4",
                          "trialId": "24302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "According to this diagram about the story:",
                          "answer": "Some Ziplings play the more active glowroll game.",
                          "intervention": "CircleDiagrams",
                          "foil1": "No Zipling plays the more active glowroll game.",
                          "foil2": "All Ziplings play the more active glowroll game.",
                          "foil3": "Some Ziplings do not play glowroll."
                        }
                      }]
                    },
                    {
                      "id": "B_2_2_4_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_2_4_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "2_4",
                          "trialId": "24303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "According to this diagram about the story:",
                          "answer": "No glowblobs that roll off the field get points.",
                          "intervention": "CircleDiagrams",
                          "foil1": "No glowblobs that roll off the field lose points.",
                          "foil2": "All glowblobs that roll off the field get points.",
                          "foil3": "Some things that get points are glowblobs that roll off the field."
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 100
                }
              ],
              "override": {
                "passageText": [
                  "\"Ziplings of all ages play glowroll. Glowroll is a sport where players roll glowblobs toward targets. Some of the glowblobs hit their targets and fall into holes. Players get points when their glowblobs hit the targets. Glowblobs that miss stay on the glowfield, and can be knocked off by the opponent's glowblob. Players lose points if their glowblobs roll all the way off the field.\"",
                  "\"Almost all Ziplings play some version of glowroll. Young and old Ziplings play a very slow game where they stay on the edge of the field. The more active Ziplings play a more active version of the game. Here, they run around the field using brooms to push their glowblobs toward the holes. So many Ziplings play glowroll that large glowroll tournaments can last almost a week.\""
                ]
              }
            }
          ]
        },
        {
          "id": "B_2_3",
          "type": "COWNSLevel",
          "description": "Level 3 Node",
          "override": {
            "level": 3
          },
          "children": [{
              "id": "B_2_3_1",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_3_1_1",
                  "type": "COWNSStage1",
                  "children": [{
                      "id": "B_2_3_1_1_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_1_1_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "3_1",
                          "trialId": "31101",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"According to the article, what do bees do to survive through the winter?\"",
                          "answer": "preserve nectar as honey",
                          "intervention": "",
                          "foil1": "build a protective hive",
                          "foil2": "gather together for warmth",
                          "foil3": "go into a deep sleep",
                          "pages": [
                            "\"While many insects eat the nectar of flowers, only honeybees convert nectar into honey. Making honey preserves the nectar so there will be enough food for winter. It takes a lot of work to create honey. And the worker bees do it all.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_1_1_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_1_1_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "3_1",
                          "trialId": "31102",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "Field bees are...",
                          "answer": "the older worker bees.",
                          "intervention": "",
                          "foil1": "the younger worker bees.",
                          "foil2": "the drones.",
                          "foil3": "worker bees who want to be queen.",
                          "pages": [
                            "\"A wild hive has one queen bee, a few hundred male drones, and as many as 20,000 female worker bees. The worker bees are divided into house bees and field bees. Older worker bees become field bees. Field bees travel all day gathering pollen, nectar, and water. While storing the nectar, they start breaking down its starches into sugars.  This is the beginning of the honey-making process.  Field bees also collect sticky plant resins that are used to build the honeycomb. \""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_1_1_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_1_1_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "3_1",
                          "trialId": "31103",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"When the article says, \"\"by fanning their wings constantly, they slowly dry out the honey...,\"\" who does the word \"\"they\"\" refer to?\"",
                          "answer": "the house bees",
                          "intervention": "",
                          "foil1": "the worker bees",
                          "foil2": "the field bees",
                          "foil3": "the male drones",
                          "pages": [
                            "\"The younger worker bees are employed as house bees. House bees build the honeycomb used to store the honey. They also \"\"chew\"\" the nectar to complete the process of converting it into honey. By fanning their wings constantly, they slowly dry out the honey before sealing it into the honeycomb. This fanning also regulates the temperature of the hive. House bees are also responsible for defending the hive.  The phrase \"\"busy as a bee\"\" really applies to worker bees!\""
                          ]
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_3_1_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_3_1_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_1_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "3_1",
                          "trialId": "31201",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "steps",
                          "intervention": "Tables",
                          "foil1": "bees",
                          "foil2": "pages",
                          "foil3": "numbers",
                          "graphicName": "9-MakingHoney"
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_1_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_1_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "3_1",
                          "trialId": "31202",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "house bees",
                          "intervention": "Tables",
                          "foil1": "field bees",
                          "foil2": "drones",
                          "foil3": "worker bees",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_1_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_1_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "3_1",
                          "trialId": "31203",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "field bees",
                          "intervention": "Tables",
                          "foil1": "house bees",
                          "foil2": "drones",
                          "foil3": "worker bees",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_1_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_1_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "3_1",
                          "trialId": "31204",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "gather nectar",
                          "intervention": "Tables",
                          "foil1": "regulate hive temperature",
                          "foil2": "make honey",
                          "foil3": "gather pollen",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_1_2_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_1_2_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "3_1",
                          "trialId": "31205",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "\"\"\"chew\"\" nectar to finish converting it into honey\"",
                          "intervention": "Tables",
                          "foil1": "gather sticky plant resins to build the honeycomb",
                          "foil2": "return partly processed nectar to hive",
                          "foil3": "process starches to turn them into nectar",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_1_2_6",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_1_2_6_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "6",
                          "passageId": "3_1",
                          "trialId": "31206",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "dry honey by fanning with wings",
                          "intervention": "Tables",
                          "foil1": "defend honey from other insects",
                          "foil2": "build honeycomb to store the honey",
                          "foil3": "collect converted nectar from field bees",
                          "graphicName": ""
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_3_1_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_3_1_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_1_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "3_1",
                          "trialId": "31301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "9-MakingHoney",
                          "question": "Which of the following happens first?",
                          "answer": "The field bees collect the nectar.",
                          "intervention": "Tables",
                          "foil1": "The field bees break down the nectar starches into sugars.",
                          "foil2": "The house bees convert the nectar into honey.",
                          "foil3": "The house bees store the nectar in the honeycomb."
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_1_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_1_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "3_1",
                          "trialId": "31302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"According to the table, which of the following is a true statement?\"",
                          "answer": "The house bees are responsible for sealing honey into the honeycomb.",
                          "intervention": "Tables",
                          "foil1": "The field bees are responsible for chewing flower nectar to make honey.",
                          "foil2": "The house bees are responsible for gathering sticky plant resins.",
                          "foil3": "The drones are responsible for defending the hive."
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_1_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_1_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "3_1",
                          "trialId": "31303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Which of these facts is not represented in the table?",
                          "answer": "Bees make honey to provide food for the winter.",
                          "intervention": "Tables",
                          "foil1": "Field bees do the first steps of honey-making.",
                          "foil2": "The field bees and the house bees divide the work.",
                          "foil3": "\"After the honey is dried, it is sealed into the honeycomb.\""
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_1_3_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_1_3_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "3_1",
                          "trialId": "31304",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "It is true that...",
                          "answer": "field bees begin the process of breaking down the nectar.",
                          "intervention": "Tables",
                          "foil1": "field bees spend their time in the hive fanning the honey.",
                          "foil2": "\"field bees gather the honey, but house bees store it in the hive.\"",
                          "foil3": "house bees care for the young and feed them raw nectar."
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_1_3_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_1_3_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "3_1",
                          "trialId": "31305",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "House bees fan their wings in order to...",
                          "answer": "dry out the honey.",
                          "intervention": "Tables",
                          "foil1": "cool off the queen bee.",
                          "foil2": "break the starches into sugars.",
                          "foil3": "build the honeycomb."
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 80
                }
              ],
              "override": {
                "passageText": [
                  "\"While many insects eat the nectar of flowers, only honeybees convert nectar into honey. Making honey preserves the nectar so there will be enough food for winter. It takes a lot of work to create honey. And the worker bees do it all.\"",
                  "\"A wild hive has one queen bee, a few hundred male drones, and as many as 20,000 female worker bees. The worker bees are divided into house bees and field bees. Older worker bees become field bees. Field bees travel all day gathering pollen, nectar, and water. While storing the nectar, they start breaking down its starches into sugars.  This is the beginning of the honey-making process.  Field bees also collect sticky plant resins that are used to build the honeycomb. \"",
                  "\"The younger worker bees are employed as house bees. House bees build the honeycomb used to store the honey. They also \"\"chew\"\" the nectar to complete the process of converting it into honey. By fanning their wings constantly, they slowly dry out the honey before sealing it into the honeycomb. This fanning also regulates the temperature of the hive. House bees are also responsible for defending the hive.  The phrase \"\"busy as a bee\"\" really applies to worker bees!\""
                ]
              }
            },
            {
              "id": "B_2_3_2",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_3_2_1",
                  "type": "COWNSStage1",
                  "children": [{
                      "id": "B_2_3_2_1_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_2_1_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "3_2",
                          "trialId": "32101",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"According to the passage, glassblowers work in teams because...\"",
                          "answer": "it is dangerous to work alone with such hot materials.",
                          "intervention": "",
                          "foil1": "there is a lot of work to be done.",
                          "foil2": "it is expensive to rent a glassblowing studio.",
                          "foil3": "liquid glass can reach extremely hot temperatures.",
                          "pages": [
                            "\"Glassblowing is one of the hottest crafts around. Liquid glass can reach over 2000 degrees Fahrenheit. Heated furnaces, hot tools, and liquid glass all pose burn risks. In addition, glass can shatter explosively if it cools too quickly. To keep things safe, glassblowers work in teams. They put one person, called the gaffer, in charge.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_2_1_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_2_1_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "3_2",
                          "trialId": "32102",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"According to the passage, why must the glassblower keep turning the blowpipe?\"",
                          "answer": "so the glass does not drip off",
                          "intervention": "",
                          "foil1": "to create a glass bubble",
                          "foil2": "so it will cool and take shape",
                          "foil3": "to keep the blowpipe from getting too hot",
                          "pages": [
                            "\"The raw ingredients that make up glass are called the batch. The batch is heated in a furnace to 2200 degrees until it becomes liquid, or molten. The glassblower gathers molten glass at the end of a steel tube called a blowpipe. The blowpipe must be turned constantly to keep the glass from dripping off. The glass is rolled on a steel table called a marver, to cool and shape it. Later, the glassblower blows into the pipe, creating a glass bubble. \"",
                            "\"To add color, the hot glass can be rolled in bits of colored glass. It's hard to predict the final color, though, because molten glass always glows orange. Finished pieces are placed in a 900-degree annealing oven. The oven is gradually cooled overnight so that the glass won't crack. \""
                          ]
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_3_2_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_3_2_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_2_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "3_2",
                          "trialId": "32201",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "annealing oven",
                          "intervention": "Tables",
                          "foil1": "baking oven",
                          "foil2": "finishing furnace",
                          "foil3": "tempering furnace",
                          "graphicName": "10-Glassblowing"
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_2_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_2_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "3_2",
                          "trialId": "32202",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "gaffer",
                          "intervention": "Tables",
                          "foil1": "manager",
                          "foil2": "marver",
                          "foil3": "glassblower",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_2_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_2_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "3_2",
                          "trialId": "32203",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "collecting liquid glass from the furnace",
                          "intervention": "Tables",
                          "foil1": "a meeting called by the gaffer",
                          "foil2": "a bubble blown into the glass",
                          "foil3": "collecting glass chips for coloring a piece",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_2_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_2_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "3_2",
                          "trialId": "32204",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "steel table on which hot glass is rolled into shape and cooled",
                          "intervention": "Tables",
                          "foil1": "bits of colored glass used for coloring a piece",
                          "foil2": "the glassblower who keeps the blowpipe turning constantly",
                          "foil3": "oven in which a batch of glass is melted",
                          "graphicName": ""
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_3_2_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_3_2_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_2_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "3_2",
                          "trialId": "32301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "10-Glassblowing",
                          "question": "The gaffer is...",
                          "answer": "the person in charge.",
                          "intervention": "Tables",
                          "foil1": "one of the raw ingredients.",
                          "foil2": "the molten glass.",
                          "foil3": "the cooling oven."
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_2_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_2_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "3_2",
                          "trialId": "32302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "The steel table used to cool and shape the glass is called...",
                          "answer": "the marver.",
                          "intervention": "Tables",
                          "foil1": "the Kuglar.",
                          "foil2": "the batch.",
                          "foil3": "the gaffer."
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_2_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_2_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "3_2",
                          "trialId": "32303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Glass is cooled overnight in an annealing oven...",
                          "answer": "so it won't crack from cooling too quickly.",
                          "intervention": "Tables",
                          "foil1": "allowing the team to go home for the night.",
                          "foil2": "gradually reaching 900 degrees.",
                          "foil3": "where the next batch is becoming molten."
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_2_3_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_2_3_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "3_2",
                          "trialId": "32304",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "If the molten glass needs to be cooled for the glassblower to work with it...",
                          "answer": "it is rolled on the marver.",
                          "intervention": "Tables",
                          "foil1": "it is allowed to drip off the blowpipe.",
                          "foil2": "the glassblower must blow a bubble into it.",
                          "foil3": "it is rolled in bits of cool glass."
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_2_3_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_2_3_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "3_2",
                          "trialId": "32305",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "The annealing oven...",
                          "answer": "begins at a heat of 900 degrees.",
                          "intervention": "Tables",
                          "foil1": "causes the glass to break.",
                          "foil2": "is used to reheat the glass while working on it.",
                          "foil3": "is used to make the glass liquid."
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 80
                }
              ],
              "override": {
                "passageText": [
                  "\"Glassblowing is one of the hottest crafts around. Liquid glass can reach over 2000 degrees Fahrenheit. Heated furnaces, hot tools, and liquid glass all pose burn risks. In addition, glass can shatter explosively if it cools too quickly. To keep things safe, glassblowers work in teams. They put one person, called the gaffer, in charge.\"",
                  "\"The raw ingredients that make up glass are called the batch. The batch is heated in a furnace to 2200 degrees until it becomes liquid, or molten. The glassblower gathers molten glass at the end of a steel tube called a blowpipe. The blowpipe must be turned constantly to keep the glass from dripping off. The glass is rolled on a steel table called a marver, to cool and shape it. Later, the glassblower blows into the pipe, creating a glass bubble. \"",
                  "\"To add color, the hot glass can be rolled in bits of colored glass. It's hard to predict the final color, though, because molten glass always glows orange. Finished pieces are placed in a 900-degree annealing oven. The oven is gradually cooled overnight so that the glass won't crack. \""
                ]
              }
            },
            {
              "id": "B_2_3_3",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_3_3_1",
                  "type": "COWNSStage1",
                  "children": [{
                      "id": "B_2_3_3_1_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_3_1_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "3_3",
                          "trialId": "33101",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "Bert looked up to...",
                          "answer": "check on the approaching weather.",
                          "intervention": "",
                          "foil1": "see how long it was until dark.",
                          "foil2": "see if he could spot Snow Lodge yet.",
                          "foil3": "roll his eyes at Nan and Dorothy.",
                          "pages": [
                            "\"The meal was soon over and then the young people got ready to resume their trip. Nan and Dorothy wanted to skate a bit, but Bert looking up at the sky, said:\"",
                            "\"\"\"I don't think it will be safe. It looks as though it were going to storm soon, and we don't want to be caught in it. It isn't far to Snow Lodge now, and once we are there let it snow as much as it likes. But if it comes down before we get there we'll have hard work to keep on in the ice-boat. Even a little snow on the ice will clog the runners.\"\"\"",
                            "\"So the skating idea was given up, and soon they were under way in the ice-boat again. The clouds grew darker, and there were a few scattering flakes of snow.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_3_1_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_3_1_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "3_3",
                          "trialId": "33102",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"In the phrase \"\"the storm suddenly broke,\"\" what does the word \"\"broke\"\" mean?\"",
                          "answer": "began violently",
                          "intervention": "",
                          "foil1": "ceased",
                          "foil2": "split into pieces",
                          "foil3": "out of money",
                          "pages": [
                            "\"\"\"I guess we're going to be in for it,\"\" said Bert. \"\"If the wind would only blow harder we could go faster.\"\"\"",
                            "As if in answer to his wish the wind started up and the boat fairly flew over the ice. Then the storm suddenly broke and the snow was so thick that they could not see where they were going.",
                            "\"\"\"What shall we do?\"\" cried Dorothy, who was not used to being out in such a blow.\"",
                            "\"\"\"Keep on�that's the only thing to do,\"\" answered Bert. \"\"We will go as far as we can in the boat and then we'll walk.\"\"\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_3_1_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_3_1_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "3_3",
                          "trialId": "33103",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"In the sentence, \"\"We'll have to leave her here and walk on,\"\" the pronoun \"\"her\"\" refers to...\"",
                          "answer": "the ice-boat.",
                          "intervention": "",
                          "foil1": "the wind.",
                          "foil2": "Nan.",
                          "foil3": "Dorothy.",
                          "pages": [
                            "\"\"\"Walk to Snow Lodge!\"\" cried Nan. \"\"We could never do it!\"\"\"",
                            "\"\"\"Oh, it isn't so far now,\"\" said her brother.\"",
                            "\"The snow fell so fast that soon the ice-boat went slower and slower. Finally it stopped altogether, the runners clogged with snow. The wind blowing on the sail nearly turned the craft over.\"",
                            "\"\"\"Cast off those ropes!\"\" cried Bert to Harry. \"\"We'll have to leave her here and walk on.\"\"\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_3_1_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_3_1_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "3_3",
                          "trialId": "33104",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "Bert says they must stay near the shore so...",
                          "answer": "they will see the lodge through the snow.",
                          "intervention": "",
                          "foil1": "they will be less likely to fall in the ice.",
                          "foil2": "they don't get hit by a passing ice-boat.",
                          "foil3": "Dorothy will feel safer and stop worrying.",
                          "pages": [
                            "\"The sail was lowered, the blankets and robes were picked up to be carried, and the four girls and boys set out over the ice.\"",
                            "\"\"\"We must keep near the shore,\"\" said Bert, \"\"Snow Lodge is right on the shore of the lake, and we can't miss it.\"\"\"",
                            "\"\"\"Oh, suppose we did, and had to stay out all night?\"\" cried Dorothy.\"",
                            "\"\"\"We won't worry until we have to,\"\" spoke Nan.\""
                          ]
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_3_3_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_3_3_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_3_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "3_3",
                          "trialId": "33201",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "wanted to skate?",
                          "intervention": "Tables",
                          "foil1": "said to keep near the shore?",
                          "foil2": "cast off the ropes?",
                          "foil3": "lowered the sails?",
                          "graphicName": "11-Snowstorm"
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_3_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_3_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "3_3",
                          "trialId": "33202",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "wished the wind would pick up?",
                          "intervention": "Tables",
                          "foil1": "worried that the wind was picking up?",
                          "foil2": "walked to snow lodge?",
                          "foil3": "said not to worry?",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_3_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_3_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "3_3",
                          "trialId": "33203",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "worried they would miss the lodge?",
                          "intervention": "Tables",
                          "foil1": "gathered the blankets and robes?",
                          "foil2": "was used to the being out in bad storms?",
                          "foil3": "said to cast off the ropes?",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_3_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_3_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "3_3",
                          "trialId": "33204",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "Bert",
                          "intervention": "Tables",
                          "foil1": "Nan",
                          "foil2": "Dorothy",
                          "foil3": "Harry",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_3_2_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_3_2_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "3_3",
                          "trialId": "33205",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "Nan",
                          "intervention": "Tables",
                          "foil1": "Bert",
                          "foil2": "Dorothy",
                          "foil3": "Harry",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_3_2_6",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_3_2_6_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "6",
                          "passageId": "3_3",
                          "trialId": "33206",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "Dorothy",
                          "intervention": "Tables",
                          "foil1": "Nan",
                          "foil2": "Bert",
                          "foil3": "Harry",
                          "graphicName": ""
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_3_3_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_3_3_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_3_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "3_3",
                          "trialId": "33301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "11-Snowstorm",
                          "question": "It is true that...",
                          "answer": "all four kids began walking to Snow Lodge.",
                          "intervention": "Tables",
                          "foil1": "Bert wanted to skate.",
                          "foil2": "Harry wished the wind would pick up.",
                          "foil3": "Nan knew the snow would start soon."
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_3_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_3_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "3_3",
                          "trialId": "33302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Both Nan and Dorothy...",
                          "answer": "wanted to skate.",
                          "intervention": "Tables",
                          "foil1": "worried about missing the lodge.",
                          "foil2": "wished the wind would pick up.",
                          "foil3": "told Harry it was going to snow soon."
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_3_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_3_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "3_3",
                          "trialId": "33303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "It was Bert that...",
                          "answer": "knew the snow would start soon.",
                          "intervention": "Tables",
                          "foil1": "wanted to skate.",
                          "foil2": "walked alone to Snow Lodge.",
                          "foil3": "worried that the wind would pick up."
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_3_3_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_3_3_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "3_3",
                          "trialId": "33304",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"From looking at the table, it appears that Harry...\"",
                          "answer": "is the least important character in this passage.",
                          "intervention": "Tables",
                          "foil1": "worried about the wind as much as Dorothy.",
                          "foil2": "frequently told the other kids what to do.",
                          "foil3": "was the first character to reach Snow Lodge."
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_3_3_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_3_3_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "3_3",
                          "trialId": "33305",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "The events in the table are listed...",
                          "answer": "in the order that they happened in the story.",
                          "intervention": "Tables",
                          "foil1": "in order of importance.",
                          "foil2": "in an order that is based on the number of characters involved.",
                          "foil3": "in no particular order."
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 80
                }
              ],
              "override": {
                "passageText": [
                  "\"The meal was soon over and then the young people got ready to resume their trip. Nan and Dorothy wanted to skate a bit, but Bert looking up at the sky, said:\"",
                  "\"\"\"I don't think it will be safe. It looks as though it were going to storm soon, and we don't want to be caught in it. It isn't far to Snow Lodge now, and once we are there let it snow as much as it likes. But if it comes down before we get there we'll have hard work to keep on in the ice-boat. Even a little snow on the ice will clog the runners.\"\"\"",
                  "\"So the skating idea was given up, and soon they were under way in the ice-boat again. The clouds grew darker, and there were a few scattering flakes of snow.\"",
                  "\"\"\"I guess we're going to be in for it,\"\" said Bert. \"\"If the wind would only blow harder we could go faster.\"\"\"",
                  "As if in answer to his wish the wind started up and the boat fairly flew over the ice. Then the storm suddenly broke and the snow was so thick that they could not see where they were going.",
                  "\"\"\"What shall we do?\"\" cried Dorothy, who was not used to being out in such a blow.\"",
                  "\"\"\"Keep on�that's the only thing to do,\"\" answered Bert. \"\"We will go as far as we can in the boat and then we'll walk.\"\"\"",
                  "\"\"\"Walk to Snow Lodge!\"\" cried Nan. \"\"We could never do it!\"\"\"",
                  "\"\"\"Oh, it isn't so far now,\"\" said her brother.\"",
                  "\"The snow fell so fast that soon the ice-boat went slower and slower. Finally it stopped altogether, the runners clogged with snow. The wind blowing on the sail nearly turned the craft over.\"",
                  "\"\"\"Cast off those ropes!\"\" cried Bert to Harry. \"\"We'll have to leave her here and walk on.\"\"\"",
                  "\"The sail was lowered, the blankets and robes were picked up to be carried, and the four girls and boys set out over the ice.\"",
                  "\"\"\"We must keep near the shore,\"\" said Bert, \"\"Snow Lodge is right on the shore of the lake, and we can't miss it.\"\"\"",
                  "\"\"\"Oh, suppose we did, and had to stay out all night?\"\" cried Dorothy.\"",
                  "\"\"\"We won't worry until we have to,\"\" spoke Nan.\""
                ]
              }
            },
            {
              "id": "B_2_3_4",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_3_4_1",
                  "type": "COWNSStage1",
                  "children": [{
                      "id": "B_2_3_4_1_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_4_1_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "3_4",
                          "trialId": "34101",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "What is the name of this new object?",
                          "answer": "Sedna",
                          "intervention": "",
                          "foil1": "Pluto",
                          "foil2": "Inuit",
                          "foil3": "Earth",
                          "pages": [
                            "\"How many planets are in our solar system? For many years, we have thought there were nine. Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, and Pluto. But recently, scientists may have discovered a tenth planet, very small and very far away.  They named it Sedna, after the Inuit goddess of the sea. Sedna is now the most distant object known to orbit the Sun.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_4_1_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_4_1_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "3_4",
                          "trialId": "34102",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "How far away is Sedna from the Sun?",
                          "answer": "over eight billion miles",
                          "intervention": "",
                          "foil1": "as far away as the Earth",
                          "foil2": "closer than Pluto",
                          "foil3": "\"10,500 Earth years\"",
                          "pages": [
                            "\"How far away is Sedna? Much farther than any other planet. It is over eight billion miles from the Sun. That is 90 times farther than Earth, and three times farther than Pluto. It is so far away that if you were standing on Sedna, you could hold a pin at arm's length and block the entire Sun with it! From that far away, it takes 10,500 Earth years to travel once around the Sun.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_4_1_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_4_1_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "3_4",
                          "trialId": "34103",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "What color is Sedna?",
                          "answer": "\"red, like mars\"",
                          "intervention": "",
                          "foil1": "\"clear, like ice\"",
                          "foil2": "\"white, like Pluto\"",
                          "foil3": "\"green and blue, like the Earth\"",
                          "pages": [
                            "\"Because Sedna is so far away, it is very cold: over 400 degrees below zero, which is far colder than anywhere on Earth. At first, scientists thought it was made of ice, like Pluto. However, Sedna is as red as Mars is, so perhaps it is made of rock. We do not yet know for sure.\"",
                            "\"Sedna is about 1000 miles wide, which is about eight times smaller than Earth. Pluto, the smallest planet before Sedna, is 1400 miles wide.  \""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_4_1_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_4_1_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "3_4",
                          "trialId": "34104",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "How many asteroids orbit the Sun?",
                          "answer": "millions",
                          "intervention": "",
                          "foil1": "nine",
                          "foil2": "about a thousand",
                          "foil3": "six hundred",
                          "pages": [
                            "\"Is Sedna really a planet? Scientists are still arguing about it, because they do not agree on the definition of \"\"planet.\"\" Millions of asteroids orbit the Sun, ranging in size from 600 miles wide to the size of a grapefruit. Sedna is larger than these asteroids, but smaller than Pluto, our smallest planet. And Sedna is so far away that we are still learning about its size and shape.\"",
                            "\"Pluto was discovered in 1930. Sedna was discovered in late 2003. Will there be other planets? As our telescopes get better and better, we could find quite a few more!\""
                          ]
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_3_4_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_3_4_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_4_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "3_4",
                          "trialId": "34201",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "how big is it?",
                          "intervention": "Tables",
                          "foil1": "how wide is its orbit?",
                          "foil2": "how big are its oceans?",
                          "foil3": "how large is the largest continent?",
                          "graphicName": "12-TenthPlanet"
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_4_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_4_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "3_4",
                          "trialId": "34202",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "about 8000 miles wide",
                          "intervention": "Tables",
                          "foil1": "about 1000 miles wide",
                          "foil2": "about 500 miles wide",
                          "foil3": "\"over 200,000 miles!\"",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_4_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_4_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "3_4",
                          "trialId": "34203",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "the size of a head of a pin",
                          "intervention": "Tables",
                          "foil1": "about the size of your thumb",
                          "foil2": "much larger than the Earth is",
                          "foil3": "about the size of a grapefruit",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_4_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_4_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "3_4",
                          "trialId": "34204",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "how long is a year?",
                          "intervention": "Tables",
                          "foil1": "how long is a solar day?",
                          "foil2": "how long does it take the sun to go around the Earth?",
                          "foil3": "how long does it take to travel there?",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_4_2_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_4_2_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "3_4",
                          "trialId": "34205",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "\"over 10,500 Earth years\"",
                          "intervention": "Tables",
                          "foil1": "365 days",
                          "foil2": "half as long as an Earth year",
                          "foil3": "\"10,500 days\"",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_4_2_6",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_4_2_6_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "6",
                          "passageId": "3_4",
                          "trialId": "34206",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "over 8 billion miles",
                          "intervention": "Tables",
                          "foil1": "almost 5 million miles",
                          "foil2": "3 times as far as the Earth",
                          "foil3": "half as far as Pluto",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_4_2_7",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_4_2_7_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "7",
                          "passageId": "3_4",
                          "trialId": "34207",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "we do not know for sure",
                          "intervention": "Tables",
                          "foil1": "mostly rock",
                          "foil2": "ice and rock",
                          "foil3": "gas and debris",
                          "graphicName": ""
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_3_4_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_3_4_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_4_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "3_4",
                          "trialId": "34301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "12-TenthPlanet",
                          "question": "Which of these is the smallest object?",
                          "answer": "Sedna",
                          "intervention": "Tables",
                          "foil1": "Sedna's sun",
                          "foil2": "the Earth",
                          "foil3": "the Earth's sun"
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_4_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_4_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "3_4",
                          "trialId": "34302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Which of the following facts from the table is the most likely explanation for why it took astronomers so long to discover Sedna?",
                          "answer": "\"Earth is 93 million miles from the Sun, while Sedna is over 8 billion miles away.\"",
                          "intervention": "Tables",
                          "foil1": "\"It takes Earth only 365 days to orbit the Sun, while Sedna takes 10,500 Earth years.\"",
                          "foil2": "\"It is only about 1000 miles wide, whereas Pluto is 3000 miles wide.\"",
                          "foil3": "It looks no bigger than the head of a pin."
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_4_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_4_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "3_4",
                          "trialId": "34303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"One row of the chart asks \"\"How long is a year?\"\"  What is the definition of a \"\"year\"\" as it is used here?\"",
                          "answer": "the time it takes to make one orbit of the sun",
                          "intervention": "Tables",
                          "foil1": "the time it takes a planet to revolve on its axes one time ",
                          "foil2": "\"365 days, except during leap years\"",
                          "foil3": "the time it takes light to travel from the sun to the planet "
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_4_3_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_4_3_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "3_4",
                          "trialId": "34304",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "This chart is supposed to list five facts about each planet.  Which fact is missing from the chart because scientists are still unsure of it?",
                          "answer": "the material that Sedna is made of",
                          "intervention": "Tables",
                          "foil1": "the distance of Sedna from Earth",
                          "foil2": "the time it takes for Sedna to orbit around the sun",
                          "foil3": "the answer to whether Sedna is an asteroid or a planet"
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_4_3_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_4_3_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "3_4",
                          "trialId": "34305",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "What is the best title for this chart?",
                          "answer": "how Sedna compares to Earth",
                          "intervention": "Tables",
                          "foil1": "our tenth planet?",
                          "foil2": "comparing and contrasting Sedna and Pluto",
                          "foil3": "\"Sedna, planet of mysteries!\""
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 80
                }
              ],
              "override": {
                "passageText": [
                  "\"How many planets are in our solar system? For many years, we have thought there were nine. Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, and Pluto. But recently, scientists may have discovered a tenth planet, very small and very far away.  They named it Sedna, after the Inuit goddess of the sea. Sedna is now the most distant object known to orbit the Sun.\"",
                  "\"How far away is Sedna? Much farther than any other planet. It is over eight billion miles from the Sun. That is 90 times farther than Earth, and three times farther than Pluto. It is so far away that if you were standing on Sedna, you could hold a pin at arm's length and block the entire Sun with it! From that far away, it takes 10,500 Earth years to travel once around the Sun.\"",
                  "\"Because Sedna is so far away, it is very cold: over 400 degrees below zero, which is far colder than anywhere on Earth. At first, scientists thought it was made of ice, like Pluto. However, Sedna is as red as Mars is, so perhaps it is made of rock. We do not yet know for sure.\"",
                  "\"Sedna is about 1000 miles wide, which is about eight times smaller than Earth. Pluto, the smallest planet before Sedna, is 1400 miles wide.  \"",
                  "\"Is Sedna really a planet? Scientists are still arguing about it, because they do not agree on the definition of \"\"planet.\"\" Millions of asteroids orbit the Sun, ranging in size from 600 miles wide to the size of a grapefruit. Sedna is larger than these asteroids, but smaller than Pluto, our smallest planet. And Sedna is so far away that we are still learning about its size and shape.\"",
                  "\"Pluto was discovered in 1930. Sedna was discovered in late 2003. Will there be other planets? As our telescopes get better and better, we could find quite a few more!\""
                ]
              }
            },
            {
              "id": "B_2_3_5",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_3_5_1",
                  "type": "COWNSStage1",
                  "children": [{
                      "id": "B_2_3_5_1_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_5_1_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "3_5",
                          "trialId": "35101",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "Which record does Antarctica NOT hold?",
                          "answer": "the largest continent",
                          "intervention": "",
                          "foil1": "the windiest continent",
                          "foil2": "the driest continent",
                          "foil3": "the coldest continent",
                          "pages": [
                            "\"Which is the driest continent on Earth? Many might guess Africa or Australia, but the answer is... Antarctica. Despite being almost entirely covered in ice over a mile thick, the South Pole continent gets less than two inches of snowfall per year, so it is technically a desert! It is also the coldest and the windiest continent. A record cold temperature of -129 degrees Fahrenheit was recorded in 1983, and winds of 200 miles per hour were recorded in 1972. Perhaps even more surprising is that over 1,000 people live there year-round. Why do they live there, and what is it like?\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_5_1_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_5_1_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "3_5",
                          "trialId": "35102",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "Why is the ice cap so thick?",
                          "answer": "The ice never melts.",
                          "intervention": "",
                          "foil1": "It snows all the time.",
                          "foil2": "People keep the ice to record the climate.",
                          "foil3": "No one stands on the ice and melts it.",
                          "pages": [
                            "\"All human activity on Antarctica comes from 45 research stations across the continent. Over 4,000 scientists and support staff live there in the summer, and about 1,000 in the winter. They live in these inhospitable conditions to complete their research. The Antarctic ice cap averages 8,000 feet thick and contains a record of past climate for the last 500,000 years. Scientists can use this history to study the ozone layer, climate change, and global pollution. Other scientists study marine life or astronomy. Despite the cold conditions, Antarctica provides a perfect environment to answer important scientific questions.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_5_1_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_5_1_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "3_5",
                          "trialId": "35103",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "What is hypothermia?",
                          "answer": "when people get too cold",
                          "intervention": "",
                          "foil1": "warm clothing for winter",
                          "foil2": "sunscreen against ultraviolet radiation",
                          "foil3": "the weather conditions in antarctica",
                          "pages": [
                            "\"Scientists on Antarctica undergo special training to learn how to survive in cold weather. Some of what they learn applies to all cold weather: dress warm, protect your hands and feet, keep your clothes dry and clean, and wear goggles and sunscreen to protect against ultraviolet radiation. They also learn how to travel and camp in very cold weather. Most scientists work in teams to help each other if someone gets too cold, a condition we call \"\"hypothermia.\"\"\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_5_1_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_5_1_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "3_5",
                          "trialId": "35104",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "Why can Antarctic scientists race around the world so quickly?",
                          "answer": "Because they are very close to the South Pole.",
                          "intervention": "",
                          "foil1": "Because they have snowmobiles that move quickly.",
                          "foil2": "\"Because there is no friction, traveling on ice.\"",
                          "foil3": "Because they gain time as they change time zones.",
                          "pages": [
                            "\"On top of the extreme weather conditions, Antarctica is right on the South Pole, which creates some interesting conditions. First, there is only one day per year! In the summer the sun is up for six months in a row, and in the winter it is dark for six months. Some scientists find it hard to go to sleep in the middle of the day or get up in the middle of the night, but they get used to it after a while. Also, at the South Pole, time zones are extremely close: each research station picks a different time to follow, based on the country that owns the station. Finally, once a year they have a \"\"race around the world.\"\" In that race, they run around the South Pole three times; however, since they are so close to the pole, the entire race is less than three miles. Overall, Antarctica is a pretty interesting place to live, as long as you like the cold!\""
                          ]
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_3_5_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_3_5_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_5_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "3_5",
                          "trialId": "35201",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "6 months",
                          "intervention": "Tables",
                          "foil1": "3 months",
                          "foil2": "36 hours",
                          "foil3": "8 hours",
                          "graphicName": "13-Antarctica"
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_5_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_5_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "3_5",
                          "trialId": "35202",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "desert conditions",
                          "intervention": "Tables",
                          "foil1": "tropical conditions",
                          "foil2": "around 10 feet",
                          "foil3": "around 8000 feet",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_5_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_5_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "3_5",
                          "trialId": "35203",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "around 4 feet",
                          "intervention": "Tables",
                          "foil1": "around 8000 feet",
                          "foil2": "desert conditions",
                          "foil3": "tropical conditions",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_5_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_5_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "3_5",
                          "trialId": "35204",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "climate",
                          "intervention": "Tables",
                          "foil1": "tides",
                          "foil2": "social events",
                          "foil3": "global pollution",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_5_2_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_5_2_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "3_5",
                          "trialId": "35205",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "ice never melts",
                          "intervention": "Tables",
                          "foil1": "snow never falls",
                          "foil2": "sun never shines",
                          "foil3": "ice stays until august",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_5_2_6",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_5_2_6_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "6",
                          "passageId": "3_5",
                          "trialId": "35206",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "winter population",
                          "intervention": "Tables",
                          "foil1": "ice cap depth",
                          "foil2": "highest wind speeds",
                          "foil3": "years of past climate recorded",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_5_2_7",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_5_2_7_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "7",
                          "passageId": "3_5",
                          "trialId": "35207",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "\"1,000\"",
                          "intervention": "Tables",
                          "foil1": "\"4,000\"",
                          "foil2": "100",
                          "foil3": "\"1,400\"",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_5_2_8",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_5_2_8_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "8",
                          "passageId": "3_5",
                          "trialId": "35208",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "only one",
                          "intervention": "Tables",
                          "foil1": "only twelve",
                          "foil2": "based on country of origin",
                          "foil3": "same",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_5_2_9",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_5_2_9_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "9",
                          "passageId": "3_5",
                          "trialId": "35209",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "climate change",
                          "intervention": "Tables",
                          "foil1": "international trade",
                          "foil2": "urban planning",
                          "foil3": "sandstorms",
                          "graphicName": ""
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_3_5_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_3_5_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_5_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "3_5",
                          "trialId": "35301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "13-Antarctica",
                          "question": "What is the most likely reason that someone would live in Antarctica rather than New York City?",
                          "answer": "to study climate change",
                          "intervention": "Tables",
                          "foil1": "because they like big crowds",
                          "foil2": "because they like lots of snow and rain",
                          "foil3": "to have shorter days"
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_5_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_5_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "3_5",
                          "trialId": "35302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"What does the word \"\"day\"\" mean as used in the table?\"",
                          "answer": "time from sunrise to sunset",
                          "intervention": "Tables",
                          "foil1": "time for the Earth to make a single revolution on its axes",
                          "foil2": "the number of hours a scientist is on duty",
                          "foil3": "season"
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_5_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_5_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "3_5",
                          "trialId": "35303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "What fact from the table explains why scientists in Antarctica have to go to bed in the middle of the day?",
                          "answer": "The day lasts for six months.",
                          "intervention": "Tables",
                          "foil1": "They must check on their environmental experiments.",
                          "foil2": "It is too cold to go outside.",
                          "foil3": "They race around the world in less than three miles."
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_5_3_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_5_3_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "3_5",
                          "trialId": "35304",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Most people would argue that Antarctica is a more inhospitable place to live than New York City. Which factor best supports that argument?",
                          "answer": "climate",
                          "intervention": "Tables",
                          "foil1": "annual rainfall/snowfall",
                          "foil2": "time zones",
                          "foil3": "great place for studying climate change"
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_5_3_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_5_3_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "3_5",
                          "trialId": "35305",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Which of the following is true about Antarctica?",
                          "answer": "\"Parts of Antarctica are in the same time zone as New York City, but other parts are not.\"",
                          "intervention": "Tables",
                          "foil1": "\"Parts of New York City are in the same time zone as Antarctica, but other parts are not.\"",
                          "foil2": "All parts of Antarctica and New York City are in the same time zone.",
                          "foil3": "No parts of Antarctica and New York City are in the same time zone."
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 80
                }
              ],
              "override": {
                "passageText": [
                  "\"Which is the driest continent on Earth? Many might guess Africa or Australia, but the answer is... Antarctica. Despite being almost entirely covered in ice over a mile thick, the South Pole continent gets less than two inches of snowfall per year, so it is technically a desert! It is also the coldest and the windiest continent. A record cold temperature of -129 degrees Fahrenheit was recorded in 1983, and winds of 200 miles per hour were recorded in 1972. Perhaps even more surprising is that over 1,000 people live there year-round. Why do they live there, and what is it like?\"",
                  "\"All human activity on Antarctica comes from 45 research stations across the continent. Over 4,000 scientists and support staff live there in the summer, and about 1,000 in the winter. They live in these inhospitable conditions to complete their research. The Antarctic ice cap averages 8,000 feet thick and contains a record of past climate for the last 500,000 years. Scientists can use this history to study the ozone layer, climate change, and global pollution. Other scientists study marine life or astronomy. Despite the cold conditions, Antarctica provides a perfect environment to answer important scientific questions.\"",
                  "\"Scientists on Antarctica undergo special training to learn how to survive in cold weather. Some of what they learn applies to all cold weather: dress warm, protect your hands and feet, keep your clothes dry and clean, and wear goggles and sunscreen to protect against ultraviolet radiation. They also learn how to travel and camp in very cold weather. Most scientists work in teams to help each other if someone gets too cold, a condition we call \"\"hypothermia.\"\"\"",
                  "\"On top of the extreme weather conditions, Antarctica is right on the South Pole, which creates some interesting conditions. First, there is only one day per year! In the summer the sun is up for six months in a row, and in the winter it is dark for six months. Some scientists find it hard to go to sleep in the middle of the day or get up in the middle of the night, but they get used to it after a while. Also, at the South Pole, time zones are extremely close: each research station picks a different time to follow, based on the country that owns the station. Finally, once a year they have a \"\"race around the world.\"\" In that race, they run around the South Pole three times; however, since they are so close to the pole, the entire race is less than three miles. Overall, Antarctica is a pretty interesting place to live, as long as you like the cold!\""
                ]
              }
            },
            {
              "id": "B_2_3_6",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_3_6_1",
                  "type": "COWNSStage1",
                  "children": [{
                      "id": "B_2_3_6_1_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_6_1_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "3_6",
                          "trialId": "36101",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"According to the passage, where have hundreds of astronauts experienced weightlessness?\"",
                          "answer": "in spacecraft",
                          "intervention": "",
                          "foil1": "on the moon",
                          "foil2": "in space flight simulators",
                          "foil3": "when eating and drinking",
                          "pages": [
                            "\"\"\"What goes up, must come down.\"\" Very few things in life are more constant than the force of gravity�we have experienced it every second of our lives. Starting in the 1960s, though, this suddenly changed. In 1961, Yuri Gagarin experienced weightlessness as the first astronaut to orbit the Earth. Hundreds of astronauts have now experienced weightlessness in spacecraft, sometimes even for long periods on space stations. But living without gravity is not easy: not only must we relearn tasks like eating and drinking, but our bodies must adjust also.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_6_1_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_6_1_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "3_6",
                          "trialId": "36102",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "What can be troubling about being without gravity?",
                          "answer": "Astronauts can feel sick in the beginning.",
                          "intervention": "",
                          "foil1": "Astronauts can't tell which direction to face.",
                          "foil2": "Astronauts feel very heavy.",
                          "foil3": "Astronauts enjoy floating around the space capsule.",
                          "pages": [
                            "\"Our sense of balance depends on an extremely sophisticated system. The movement of fluid within the inner ear tells us which way is up.  Receptors in our skin and our joints provide additional information about our position. This system depends on gravity. Without the pull of the Earth, it will send bad information to the brain. Because of this, astronauts often feel like they are upside-down, even when they can see that they are facing in the right direction. Roughly half of all astronauts get headaches and nausea because of the conflicting information from their eyes and their sense of balance. Since it is similar to feeling seasick or carsick, astronauts call this \"\"space sickness.\"\" At first, it can be quite troubling.  However, space sickness usually disappears after a few days in space.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_6_1_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_6_1_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "3_6",
                          "trialId": "36103",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"According to the passage, which of these health problems may be a problem for astronauts returning to Earth after a long time in space?\"",
                          "answer": "weakened heart",
                          "intervention": "",
                          "foil1": "blocked sinuses ",
                          "foil2": "stuffy nose",
                          "foil3": "nausea and headache",
                          "pages": [
                            "\"Astronauts' bodies adjust to being weightless in many ways, but these adjustments can cause problems back on Earth. In gravity, the blood in our bodies tends to pool in our legs and feet. Therefore, our hearts have to work a bit harder to bring blood to our heads. In space, more blood moves to our heads, which can cause blocked sinuses and stuffy noses. Also, since astronauts' hearts do not have to work as hard to push blood against gravity, they tend to get weaker and smaller. This can lead to problems back on Earth. Similarly, many of our muscles are always working just to hold us up against gravity; astronauts often lose muscle mass in space, and they must exercise quite a bit on stationary bicycles to slow down that process.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_6_1_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_6_1_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "3_6",
                          "trialId": "36104",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"According to the passage, what do astronauts have to relearn when they return to Earth?\"",
                          "answer": "how to maintain their balance",
                          "intervention": "",
                          "foil1": "how to stay fit with exercise bicycles",
                          "foil2": "how to drink from a cup",
                          "foil3": "how to interpret to signals from the inner ear",
                          "pages": [
                            "\"Despite the problems, many astronauts have lived in weightless conditions for long periods of time. The record goes to Valeri Polyakov, who stayed on Mir, a Russian space station, for 438 days in a row. After a long time in space, it is a big adjustment for astronauts to get used to living in gravity again. Most have problems keeping their balance for the first few days after returning to Earth. They also need to exercise to regain muscle and bone mass. More humorously, astronauts report that after they are back on Earth, they still sometimes let go of cups in mid-air, only to have them plummet to the floor! However, they soon get used to gravity like the rest of us.\""
                          ]
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_3_6_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_3_6_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_6_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "3_6",
                          "trialId": "36201",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "stay strong to hold you up",
                          "intervention": "Tables",
                          "foil1": "get smaller and weaker",
                          "foil2": "rest when you are not moving",
                          "foil3": "work less in outer space",
                          "graphicName": "14-Living In Space"
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_6_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_6_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "3_6",
                          "trialId": "36202",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "blood",
                          "intervention": "Tables",
                          "foil1": "fluid",
                          "foil2": "balance",
                          "foil3": "stomach acid",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_6_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_6_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "3_6",
                          "trialId": "36203",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "moves to your head",
                          "intervention": "Tables",
                          "foil1": "pools in your feet",
                          "foil2": "gets smaller and weaker",
                          "foil3": "moves to your hands",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_6_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_6_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "3_6",
                          "trialId": "36204",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "sense of balance",
                          "intervention": "Tables",
                          "foil1": "sense of hearing",
                          "foil2": "brain pathways",
                          "foil3": "gravitational system",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_6_2_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_6_2_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "3_6",
                          "trialId": "36205",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "balance system and eyes send conflicting information",
                          "intervention": "Tables",
                          "foil1": "brain reminds you the sun is down in outer space",
                          "foil2": "brain signals reinforce messages from the eyes",
                          "foil3": "inner ear tells your brain where the Earth is",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_6_2_6",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_6_2_6_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "6",
                          "passageId": "3_6",
                          "trialId": "36206",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "you don't have to",
                          "intervention": "Tables",
                          "foil1": "more difficult in zero gravity",
                          "foil2": "is easy if you pay attention",
                          "foil3": "is important for astronauts",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_6_2_7",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_6_2_7_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "7",
                          "passageId": "3_6",
                          "trialId": "36207",
                          "stageType": "Strategy",
                          "taskType": "BuildTable",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "things float in mid-air",
                          "intervention": "Tables",
                          "foil1": "things fall faster in rapidly moving spacecraft",
                          "foil2": "things fall up instead of down",
                          "foil3": "things are harder to hold in space",
                          "graphicName": ""
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_3_6_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_3_6_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_6_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "3_6",
                          "trialId": "36301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "14-Living In Space",
                          "question": "\"When they are in space, it is easier for astronauts to...\"",
                          "answer": "avoid falling down.",
                          "intervention": "Tables",
                          "foil1": "avoid problems with their sense of balance.",
                          "foil2": "keep their muscles strong.",
                          "foil3": "avoid having blood move to the head."
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_6_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_6_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "3_6",
                          "trialId": "36302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"Back on Earth, astronauts sometimes drop their cups on the ground. This is most likely because...\"",
                          "answer": "they have gotten used to things floating without gravity.",
                          "intervention": "Tables",
                          "foil1": "the muscles in their hands have gotten extremely weak in space.",
                          "foil2": "the brain gets conflicting information from the eyes and the balance system.",
                          "foil3": "machines hold things for them in space."
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_6_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_6_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "3_6",
                          "trialId": "36303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Why can't astronauts rely on their balance system to know which way is up in space?",
                          "answer": "\"When their eyes tell them they are right-side-up, their inner ear tells them they are upside-down.\"",
                          "intervention": "Tables",
                          "foil1": "\"They cannot always see where Earth is, but the inner ear still responds to Earth's gravitational pull.\"",
                          "foil2": "\"Their eyes tell them they are in space, but their balance system still thinks they are on Earth.\"",
                          "foil3": "\"Since they cannot fall, the balance system is no longer used and it gets weaker.\""
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_6_3_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_6_3_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "3_6",
                          "trialId": "36304",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Which of these would help astronauts improve their health while living without gravity?",
                          "answer": "exercise equipment to rebuild their muscles ",
                          "intervention": "Tables",
                          "foil1": "special clothing to help them balance ",
                          "foil2": "devices to help them hold tools more easily ",
                          "foil3": "medicines to improve their circulation "
                        }
                      }]
                    },
                    {
                      "id": "B_2_3_6_3_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_3_6_3_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "3_6",
                          "trialId": "36305",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"When they are on Earth, it is easier for astronauts to... \"",
                          "answer": "keep their muscles strong.",
                          "intervention": "Tables",
                          "foil1": "get blood to their heads.",
                          "foil2": "avoid dropping things.",
                          "foil3": "get space sickness."
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 80
                }
              ],
              "override": {
                "passageText": [
                  "\"\"\"What goes up, must come down.\"\" Very few things in life are more constant than the force of gravity�we have experienced it every second of our lives. Starting in the 1960s, though, this suddenly changed. In 1961, Yuri Gagarin experienced weightlessness as the first astronaut to orbit the Earth. Hundreds of astronauts have now experienced weightlessness in spacecraft, sometimes even for long periods on space stations. But living without gravity is not easy: not only must we relearn tasks like eating and drinking, but our bodies must adjust also.\"",
                  "\"Our sense of balance depends on an extremely sophisticated system. The movement of fluid within the inner ear tells us which way is up.  Receptors in our skin and our joints provide additional information about our position. This system depends on gravity. Without the pull of the Earth, it will send bad information to the brain. Because of this, astronauts often feel like they are upside-down, even when they can see that they are facing in the right direction. Roughly half of all astronauts get headaches and nausea because of the conflicting information from their eyes and their sense of balance. Since it is similar to feeling seasick or carsick, astronauts call this \"\"space sickness.\"\" At first, it can be quite troubling.  However, space sickness usually disappears after a few days in space.\"",
                  "\"Astronauts' bodies adjust to being weightless in many ways, but these adjustments can cause problems back on Earth. In gravity, the blood in our bodies tends to pool in our legs and feet. Therefore, our hearts have to work a bit harder to bring blood to our heads. In space, more blood moves to our heads, which can cause blocked sinuses and stuffy noses. Also, since astronauts' hearts do not have to work as hard to push blood against gravity, they tend to get weaker and smaller. This can lead to problems back on Earth. Similarly, many of our muscles are always working just to hold us up against gravity; astronauts often lose muscle mass in space, and they must exercise quite a bit on stationary bicycles to slow down that process.\"",
                  "\"Despite the problems, many astronauts have lived in weightless conditions for long periods of time. The record goes to Valeri Polyakov, who stayed on Mir, a Russian space station, for 438 days in a row. After a long time in space, it is a big adjustment for astronauts to get used to living in gravity again. Most have problems keeping their balance for the first few days after returning to Earth. They also need to exercise to regain muscle and bone mass. More humorously, astronauts report that after they are back on Earth, they still sometimes let go of cups in mid-air, only to have them plummet to the floor! However, they soon get used to gravity like the rest of us.\""
                ]
              }
            }
          ]
        },
        {
          "id": "B_2_4",
          "type": "COWNSLevel",
          "description": "Level 4 Node",
          "override": {
            "level": 4
          },
          "children": [{
              "id": "B_2_4_1",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_4_1_1",
                  "type": "COWNSStage1",
                  "children": [{
                      "id": "B_2_4_1_1_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_1_1_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "4_1",
                          "trialId": "41101",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"According to the passage, what can make slicing an onion less painful?\"",
                          "answer": "slicing the onion under cold water",
                          "intervention": "",
                          "foil1": "taking the sulfur out of the onion",
                          "foil2": "putting the onion in boiling water before slicing it",
                          "foil3": "slicing the onion sideways instead of lengthwise",
                          "pages": [
                            "\"No matter how you feel about the taste of onions you will probably agree that they are a pain to deal with when you are trying to prepare them for cooking. Onions contain sulfur, which makes our eyes hurt and tear up.\"",
                            "There is a trick that can make slicing an onion less painful. Try slicing it under cold water. This will prevent the sulfur from reaching your eyes and making you cry."
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_1_1_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_1_1_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "4_1",
                          "trialId": "41102",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"According to the passage, what makes onions good for you?\"",
                          "answer": "\"They contain potassium, magnesium, and calcium.\"",
                          "intervention": "",
                          "foil1": "They have a mildly sweet taste.",
                          "foil2": "They are low in fat.",
                          "foil3": "They are available for a brief period each year.",
                          "pages": [
                            "\"Not all onions have such a sharp taste.  Some have a mildly sweet taste.  However, these onions are harder to find and more expensive than other varieties.\"",
                            "\"No matter how you slice them, onions are good for you. They contain lots of potassium, magnesium, and calcium.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_1_1_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_1_1_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "4_1",
                          "trialId": "41103",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"According to the passage, where do wild onions grow today?\"",
                          "answer": "Central Asia",
                          "intervention": "",
                          "foil1": "Egypt",
                          "foil2": "California",
                          "foil3": "all over the world",
                          "pages": [
                            "\"If you love onions, you are not alone. The ancient Egyptians worshiped onions. To them, onions symbolized eternal life.\"",
                            "\"The onions we eat today may have first come from Central Asia, where they still grow wild. Raw or cooked, onions are now a popular food all over the world.\"",
                            "\"And if you just can't stomach the idea of eating raw onions, try plugging your nose and closing your eyes while biting into one. It will taste almost like an apple.\""
                          ]
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_4_1_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_4_1_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_1_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "4_1",
                          "trialId": "41201",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "prevents sulfur from making you cry",
                          "intervention": "ConceptWebs",
                          "foil1": "prevents juice from burning your skin",
                          "foil2": "eliminates sharp taste",
                          "foil3": "gives mildly sweet taste",
                          "graphicName": "15-Onions"
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_1_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_1_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "4_1",
                          "trialId": "41202",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "rare",
                          "intervention": "ConceptWebs",
                          "foil1": "brief",
                          "foil2": "sharp taste",
                          "foil3": "grow wild",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_1_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_1_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "4_1",
                          "trialId": "41203",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "plug nose & close eyes = apple",
                          "intervention": "ConceptWebs",
                          "foil1": "plug nose & close eyes = garlic",
                          "foil2": "plug nose & close eyes = potato",
                          "foil3": "plug nose & close eyes = sweet",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_1_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_1_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "4_1",
                          "trialId": "41204",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "makes you cry",
                          "intervention": "ConceptWebs",
                          "foil1": "nutritious",
                          "foil2": "contains calcium",
                          "foil3": "slice under water",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_1_2_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_1_2_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "4_1",
                          "trialId": "41205",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "worshipped by ancient Egyptians",
                          "intervention": "ConceptWebs",
                          "foil1": "have healthful properties when raw",
                          "foil2": "can live for centuries",
                          "foil3": "celebrated in Central Asia",
                          "graphicName": ""
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_4_1_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_4_1_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_1_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "4_1",
                          "trialId": "41301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "Easy",
                          "stage": 3,
                          "graphicName": "15-Onions",
                          "question": "Why do our eyes hurt and tear up when we slice onions?",
                          "answer": "Onions contain sulfur.",
                          "intervention": "ConceptWebs",
                          "foil1": "Slicing onions must be done under cold water.",
                          "foil2": "Slicing onions is a painful task.",
                          "foil3": "Onions have a sad history."
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_1_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_1_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "4_1",
                          "trialId": "41302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "Easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"According to the passage, when might the flavor of an onion be mistaken for that of an apple?\"",
                          "answer": "when you can't see it or smell it ",
                          "intervention": "ConceptWebs",
                          "foil1": "when it has been cooked with sugar and cinnamon ",
                          "foil2": "\"when you get one of the rare, \"\"mildly sweet\"\" varieties\"",
                          "foil3": "when it has been sliced under cold water "
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_1_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_1_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "4_1",
                          "trialId": "41303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "Easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "What did the ancient Egyptians think of onions?",
                          "answer": "They worshiped onions and saw them as a symbol of eternal life.",
                          "intervention": "ConceptWebs",
                          "foil1": "They hated onions because of the onions' sharp taste and smell.",
                          "foil2": "\"They didn't know about onions, because onions grew primarily in Central Asia.\"",
                          "foil3": "\"They loved mild onions, but they had a hard time finding these rare vegetables.\""
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_1_3_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_1_3_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "4_1",
                          "trialId": "41304",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "Easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Which onions are hard to find and expensive? ",
                          "answer": "the ones that have a sweet taste ",
                          "intervention": "ConceptWebs",
                          "foil1": "the ones that are from Central Asia ",
                          "foil2": "the ones that symbolize eternal life ",
                          "foil3": "the ones that contain sulfur "
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_1_3_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_1_3_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "4_1",
                          "trialId": "41305",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "Easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"Which of these is NOT found in onions, according to the graphic organizer?\"",
                          "answer": "selenium",
                          "intervention": "ConceptWebs",
                          "foil1": "magnesium",
                          "foil2": "sulfur",
                          "foil3": "calcium"
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 80
                }
              ],
              "override": {
                "passageText": [
                  "\"No matter how you feel about the taste of onions you will probably agree that they are a pain to deal with when you are trying to prepare them for cooking. Onions contain sulfur, which makes our eyes hurt and tear up.\"",
                  "There is a trick that can make slicing an onion less painful. Try slicing it under cold water. This will prevent the sulfur from reaching your eyes and making you cry.",
                  "\"Not all onions have such a sharp taste.  Some have a mildly sweet taste.  However, these onions are harder to find and more expensive than other varieties.\"",
                  "\"No matter how you slice them, onions are good for you. They contain lots of potassium, magnesium, and calcium.\"",
                  "\"If you love onions, you are not alone. The ancient Egyptians worshiped onions. To them, onions symbolized eternal life.\"",
                  "\"The onions we eat today may have first come from Central Asia, where they still grow wild. Raw or cooked, onions are now a popular food all over the world.\"",
                  "\"And if you just can't stomach the idea of eating raw onions, try plugging your nose and closing your eyes while biting into one. It will taste almost like an apple.\""
                ]
              }
            },
            {
              "id": "B_2_4_2",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_4_2_1",
                  "type": "COWNSStage1",
                  "children": [{
                      "id": "B_2_4_2_1_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_2_1_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "4_2",
                          "trialId": "42101",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"According to the text, how does a botanist distinguish between a fruit and a vegetable?\"",
                          "answer": "A botanist would say that a fruit is anything that grows on a plant and contains seeds.",
                          "intervention": "",
                          "foil1": "A botanist would say that a fruit is anything that grows on a plant and tastes sweet.",
                          "foil2": "A botanist would say that a vegetable is anything that is edible and green.",
                          "foil3": "\"A botanist would say that anything that grows on a plant is a vegetable, but vegetables that contain seeds can also be called fruits.\"",
                          "pages": [
                            "Eating lots of fruits and vegetables is important for your health. You probably knew that. But do you know how to tell a fruit from a vegetable? ",
                            "\"Many people would say the difference is that a fruit has a sweet taste, while a vegetable doesn't. They might be surprised to learn that, to a botanist, a tomato is a fruit. The reason for this is that tomatoes have seeds. To a botanist, a fruit is anything that grows on a plant and contains seeds. Technically, cucumbers, chiles, and green beans are all fruits. \""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_2_1_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_2_1_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "4_2",
                          "trialId": "42102",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"According to the text, what is the legal definition of a tomato?\"",
                          "answer": "\"Legally, a tomato has been considered a vegetable since 1893.\"",
                          "intervention": "",
                          "foil1": "\"Legally, a tomato has been considered a fruit since 1893.\"",
                          "foil2": "\"Legally, a tomato has been considered a food since 1893.\"",
                          "foil3": "\"Legally, a tomato has been considered a vegetarian since 1893.\"",
                          "pages": [
                            "\"To a botanist, seeds, rather than sweetness is the deciding factor. Anything that grows on a plant, is edible, and contains no seeds is a vegetable. Some examples of vegetables are potatoes, lettuce, and radishes. \"",
                            "\"However, in 1893, the United States Supreme Court decided that tomatoes should be considered a vegetable. So, legally speaking, a tomato is a vegetable, but botanically speaking, it is a fruit.\""
                          ]
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_4_2_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_4_2_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_2_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "4_2",
                          "trialId": "42201",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "vegetable",
                          "intervention": "ConceptWebs",
                          "foil1": "potato",
                          "foil2": "fruit",
                          "foil3": "not sweet",
                          "graphicName": "16-Tomato"
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_2_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_2_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "4_2",
                          "trialId": "42202",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "seeds",
                          "intervention": "ConceptWebs",
                          "foil1": "vegetable",
                          "foil2": "banana",
                          "foil3": "law",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_2_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_2_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "4_2",
                          "trialId": "42203",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "vegetable",
                          "intervention": "ConceptWebs",
                          "foil1": "not sweet",
                          "foil2": "tomato",
                          "foil3": "in the ground",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_2_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_2_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "4_2",
                          "trialId": "42204",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "chile",
                          "intervention": "ConceptWebs",
                          "foil1": "broccoli",
                          "foil2": "lettuce",
                          "foil3": "carrot",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_2_2_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_2_2_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "4_2",
                          "trialId": "42205",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "vegetable",
                          "intervention": "ConceptWebs",
                          "foil1": "fruit",
                          "foil2": "ripe",
                          "foil3": "green",
                          "graphicName": ""
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_4_2_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_4_2_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_2_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "4_2",
                          "trialId": "42301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "Easy",
                          "stage": 3,
                          "graphicName": "16-Tomato",
                          "question": "\"According to botanists, vegetables...\"",
                          "answer": "contain no seeds.",
                          "intervention": "ConceptWebs",
                          "foil1": "include chiles and beans.",
                          "foil2": "are never sweet.",
                          "foil3": "are good in salads."
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_2_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_2_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "4_2",
                          "trialId": "42302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "Easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"According to the concept web, how would a botanist classify a cucumber?\"",
                          "answer": "A botanist would say that a cucumber is a fruit.",
                          "intervention": "ConceptWebs",
                          "foil1": "A botanist would say that a cucumber is a bean.",
                          "foil2": "A botanist would say that a cucumber is a vegetable.",
                          "foil3": "A botanist would say that a cucumber is a plant."
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_2_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_2_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "4_2",
                          "trialId": "42303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "Easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"According to the concept web, how would a botanist classify a radish?\"",
                          "answer": "A botanist would say that a radish is a vegetable.",
                          "intervention": "ConceptWebs",
                          "foil1": "A botanist would say that a radish is spicy.",
                          "foil2": "A botanist would say that a radish is a fruit.",
                          "foil3": "A botanist would say that a radish is a lettuce."
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_2_3_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_2_3_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "4_2",
                          "trialId": "42304",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "Easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Why would a botanist classify a potato as a vegetable?",
                          "answer": "because it doesn't contain seeds ",
                          "intervention": "ConceptWebs",
                          "foil1": "because it grows under the ground ",
                          "foil2": "because it doesn't taste sweet ",
                          "foil3": "because it is eaten with meat"
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_2_3_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_2_3_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "4_2",
                          "trialId": "42305",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "Easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Why would a botanist classify a peach as a fruit?",
                          "answer": "\"because it contains a pit, which is a type of seed \"",
                          "intervention": "ConceptWebs",
                          "foil1": "because it grows on a tree",
                          "foil2": "because it tastes sweet",
                          "foil3": "because it is a fruit according to the us supreme court "
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 80
                }
              ],
              "override": {
                "passageText": [
                  "Eating lots of fruits and vegetables is important for your health. You probably knew that. But do you know how to tell a fruit from a vegetable? ",
                  "\"Many people would say the difference is that a fruit has a sweet taste, while a vegetable doesn't. They might be surprised to learn that, to a botanist, a tomato is a fruit. The reason for this is that tomatoes have seeds. To a botanist, a fruit is anything that grows on a plant and contains seeds. Technically, cucumbers, chiles, and green beans are all fruits. \"",
                  "\"To a botanist, seeds, rather than sweetness is the deciding factor. Anything that grows on a plant, is edible, and contains no seeds is a vegetable. Some examples of vegetables are potatoes, lettuce, and radishes. \"",
                  "\"However, in 1893, the United States Supreme Court decided that tomatoes should be considered a vegetable. So, legally speaking, a tomato is a vegetable, but botanically speaking, it is a fruit.\""
                ]
              }
            },
            {
              "id": "B_2_4_3",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_4_3_1",
                  "type": "COWNSStage1",
                  "children": [{
                      "id": "B_2_4_3_1_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_3_1_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "4_3",
                          "trialId": "43101",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "What is Christine's mood at the start of this story?",
                          "answer": "She is frustrated and angry at her parents.",
                          "intervention": "",
                          "foil1": "\"She understands that her parents care about her, but she wishes her curfew were later.\"",
                          "foil2": "The song she is listening to is making her feel cheerful.",
                          "foil3": "She feels proud about how much she writes in her diary.",
                          "pages": [
                            "\"Christine flopped onto her bed and sighed. 9:00 pm! If she didn't get a later curfew, she'd always have to be the first one of her friends to go home! Who wants to be the wet blanket at the party? And if Christine's mom drove on Saturday, she'd make everyone leave early so that she could take them all home in one trip. Why did her parents have to be so difficult?\"",
                            "\"She put on her headphones, cranked up the volume on her music, and got out her diary. After unlocking its tiny padlock, she flipped to a blank page. With surprise, she noticed that she'd already filled up all but two pages of the book. She started to write...\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_3_1_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_3_1_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "4_3",
                          "trialId": "43102",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"How does Christine use the term \"\"Prime Time\"\"?\"",
                          "answer": "to describe the time period that certain television shows are presented: between 7:00 and 11:00 pm ",
                          "intervention": "",
                          "foil1": "to describe the time period that most saturday morning cartoons are presented: between 7:00 and 11:00 am ",
                          "foil2": "to describe the time of day she likes to be at home watching television ",
                          "foil3": "\"to describe the times that she enjoys the most, like time spent hanging out with her friends \"",
                          "pages": [
                            "\"Dear Diary,It's not fair! Mom and Dad won't budge on my curfew! Everyone I know can stay out until 10:30, or at least 10:00. No one else has to go home at 9:00! \"",
                            "\"I'm 12 years old, now, not 10. I'm old enough to stay out through Prime Time, at least! Do my parents trust me? No. They want to ruin my life and make me the biggest nerd in school. \"",
                            "What can I do? I have to do something. Maybe if I plan out my argument....Write them a letter�great idea! ",
                            "Christine"
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_3_1_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_3_1_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "4_3",
                          "trialId": "43103",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"What does Christine mean by \"\"there's nothing magical about 9:00\"\"?\"",
                          "answer": "She and her friends will not turn from good people to bad people at 9:00.",
                          "intervention": "",
                          "foil1": "\"Most movies end after 9:00, so she can never see an evening movie with a 9:00 curfew.\"",
                          "foil2": "\"If she tried to do something bad after 9:00, it would be harder because fewer kids are out.\"",
                          "foil3": "9:00 is a dull and dreary time.",
                          "pages": [
                            "\"Dear Mom and Dad, I know you're pretty set on my curfew staying at 9:00, but I'd like you to consider what I write in this letter.\"",
                            "\"Most movies start at 7:00 or 7:30, and they don't end until 9:00 or 9:30. Then we have to meet our rides and all get driven home. If I have to be home by 9:00, it means that my friends and I can never go out for dinner and see a movie.\"",
                            "\"And any trouble we could get in at 10:00, we can do at 8:00. We're not going to get in trouble, but there's nothing magical about 9:00�we're just the same people at 9:30 as we were at 8:30...\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_3_1_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_3_1_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "4_3",
                          "trialId": "43104",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "Which sentence summarizes how Christine feels at the end of the story?",
                          "answer": "She's happier because she has taken action and she thinks there is a good chance her parents will change her curfew.",
                          "intervention": "",
                          "foil1": "\"She is still angry at her parents, but she thinks there is a good chance they will change her curfew.\"",
                          "foil2": "She is less angry at her parents and she no longer feels bad about having a 9:00 curfew.",
                          "foil3": "\"She feels better after writing the letter to tell her side of the story, but she does not believe that her curfew will be changed.\"",
                          "pages": [
                            "\"Finally, I'm responsible. I'm doing well in school, and I do my chores (well, most of the time, anyway!). If I'm going to keep growing, I should have the chance to become more responsible. Moving my curfew to 10:00 would be a perfect opportunity for me to prove how responsible I am.\"",
                            "\"I know that you care about me and that you want me to be safe. But I hope that you'll listen to my side of the story. Love, Christine\"",
                            "\"Christine felt a bit more cheerful. Her parents weren't all that bad, and she was sure that if they read this letter, they'd consider moving her curfew. She closed up her diary, and went downstairs to deliver her letter.\""
                          ]
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_4_3_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_4_3_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_3_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "4_3",
                          "trialId": "43201",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "reasons Christine is unhappy with her curfew",
                          "intervention": "ConceptWebs",
                          "foil1": "why Christine's curfew should be 11:00",
                          "foil2": "ways in which Christine's parents are unfair",
                          "foil3": "arguments Christine gives her parents for changing her curfew",
                          "graphicName": "17-Curfew"
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_3_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_3_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "4_3",
                          "trialId": "43202",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "\"9:00 is okay for a 10-year-old, but i'm 12 now!\"",
                          "intervention": "ConceptWebs",
                          "foil1": "\"Since I'm a nerd, I need to stay out later than 9:00.\"",
                          "foil2": "\"My friends are nerds, and even they stay out later than 9:00.\"",
                          "foil3": "\"I am 12 years old now, and I don't need a curfew.\"",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_3_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_3_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "4_3",
                          "trialId": "43203",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "Kids will think I am a nerd.",
                          "intervention": "ConceptWebs",
                          "foil1": "Kids won't invite me to parties.",
                          "foil2": "No one has to go to bed at 9:30.",
                          "foil3": "No one has a curfew on the weekend.",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_3_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_3_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "4_3",
                          "trialId": "43204",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "Having to leave parties early makes me a wet blanket.",
                          "intervention": "ConceptWebs",
                          "foil1": "I know how I can force them to change my curfew!",
                          "foil2": "\"After writing this letter, I'll watch some Prime Time TV.\"",
                          "foil3": "\"Putting on her earphones, she turned up the volume.\"",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_3_2_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_3_2_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "4_3",
                          "trialId": "43205",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "written in letter to parents",
                          "intervention": "ConceptWebs",
                          "foil1": "said to friend Susan on phone",
                          "foil2": "parent's reasons for early curfew",
                          "foil3": "problems with early curfew",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_3_2_6",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_3_2_6_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "6",
                          "passageId": "4_3",
                          "trialId": "43206",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "Movies end too late for a 9:00 curfew.",
                          "intervention": "ConceptWebs",
                          "foil1": "Many movies start after 9:00.",
                          "foil2": "I can never find a ride home until after 9:00.",
                          "foil3": "\"If I have to go home at 9:00, they should drive me home.\"",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_3_2_7",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_3_2_7_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "7",
                          "passageId": "4_3",
                          "trialId": "43207",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "I will prove that I am responsible if you give me a chance.",
                          "intervention": "ConceptWebs",
                          "foil1": "I would be more responsible if I stayed out later.",
                          "foil2": "\"Having an early curfew tempts me to break it, which would be irresponsible.\"",
                          "foil3": "\"If I get a later curfew, I will do my chores more often.\"",
                          "graphicName": ""
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_4_3_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_4_3_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_3_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "4_3",
                          "trialId": "43301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "Easy",
                          "stage": 3,
                          "graphicName": "17-Curfew",
                          "question": "\"What does \"\"fair\"\" mean, when Christine writes that word in her diary?\"",
                          "answer": "just",
                          "intervention": "ConceptWebs",
                          "foil1": "pale",
                          "foil2": "appealing",
                          "foil3": "carnival"
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_3_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_3_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "4_3",
                          "trialId": "43302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "Hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Which argument most takes her parents' feelings into account.",
                          "answer": "I need the chance to prove I'm responsible.",
                          "intervention": "ConceptWebs",
                          "foil1": "Leaving parties early makes me a wet blanket.",
                          "foil2": "12 is old enough to stay out later than 9:00.",
                          "foil3": "Most movies don't end before 9:00."
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_3_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_3_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "4_3",
                          "trialId": "43303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "Hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"If it was true, which fact would be most damaging to one of the arguments from Christine's letter?\"",
                          "answer": "Every movie that starts at 7:00 or later also plays at around 4:00.",
                          "intervention": "ConceptWebs",
                          "foil1": "Some children do bad things before 10:00 pm.",
                          "foil2": "Christine has already proved that she is responsible in other ways.",
                          "foil3": "Most 12-year-olds have curfews of 10:00 pm or earlier."
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_3_3_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_3_3_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "4_3",
                          "trialId": "43304",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "Hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Which argument is based more on emotion than on fact?",
                          "answer": "A 9:00 curfew makes me look like a nerd.",
                          "intervention": "ConceptWebs",
                          "foil1": "\"Any trouble I could get into at 10:00, I could get into at 8:00.\"",
                          "foil2": "A 9:00 curfew makes it hard to go to dinner and a movie.",
                          "foil3": "I am responsible enough to handle a later curfew."
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_3_3_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_3_3_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "4_3",
                          "trialId": "43305",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "Hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Why are Christine's arguments different in her diary than they are in her letter?",
                          "answer": "\"Because her diary is mostly for getting out her feelings, but in her letter she is making arguments that her parents would understand.\"",
                          "intervention": "ConceptWebs",
                          "foil1": "\"Because her parents will read her diary, but she will keep her letter private.\"",
                          "foil2": "\"Because she is thinking only of herself in her diary, but in her letter she is thinking about her friends and her parents.\"",
                          "foil3": "\"Because she is listening to her music while writing in her diary, but in her letter she is concentrating more seriously.\""
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 80
                }
              ],
              "override": {
                "passageText": [
                  "\"Christine flopped onto her bed and sighed. 9:00 pm! If she didn't get a later curfew, she'd always have to be the first one of her friends to go home! Who wants to be the wet blanket at the party? And if Christine's mom drove on Saturday, she'd make everyone leave early so that she could take them all home in one trip. Why did her parents have to be so difficult?\"",
                  "\"She put on her headphones, cranked up the volume on her music, and got out her diary. After unlocking its tiny padlock, she flipped to a blank page. With surprise, she noticed that she'd already filled up all but two pages of the book. She started to write...\"",
                  "\"Dear Diary,It's not fair! Mom and Dad won't budge on my curfew! Everyone I know can stay out until 10:30, or at least 10:00. No one else has to go home at 9:00! \"",
                  "\"I'm 12 years old, now, not 10. I'm old enough to stay out through Prime Time, at least! Do my parents trust me? No. They want to ruin my life and make me the biggest nerd in school. \"",
                  "What can I do? I have to do something. Maybe if I plan out my argument....Write them a letter�great idea! ",
                  "Christine",
                  "\"Dear Mom and Dad, I know you're pretty set on my curfew staying at 9:00, but I'd like you to consider what I write in this letter.\"",
                  "\"Most movies start at 7:00 or 7:30, and they don't end until 9:00 or 9:30. Then we have to meet our rides and all get driven home. If I have to be home by 9:00, it means that my friends and I can never go out for dinner and see a movie.\"",
                  "\"And any trouble we could get in at 10:00, we can do at 8:00. We're not going to get in trouble, but there's nothing magical about 9:00�we're just the same people at 9:30 as we were at 8:30...\"",
                  "\"Finally, I'm responsible. I'm doing well in school, and I do my chores (well, most of the time, anyway!). If I'm going to keep growing, I should have the chance to become more responsible. Moving my curfew to 10:00 would be a perfect opportunity for me to prove how responsible I am.\"",
                  "\"I know that you care about me and that you want me to be safe. But I hope that you'll listen to my side of the story. Love, Christine\"",
                  "\"Christine felt a bit more cheerful. Her parents weren't all that bad, and she was sure that if they read this letter, they'd consider moving her curfew. She closed up her diary, and went downstairs to deliver her letter.\""
                ]
              }
            },
            {
              "id": "B_2_4_4",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_4_4_1",
                  "type": "COWNSStage1",
                  "children": [{
                      "id": "B_2_4_4_1_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_4_1_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "4_4",
                          "trialId": "44101",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "How long does guide dog training last?",
                          "answer": "4 to 6 months",
                          "intervention": "",
                          "foil1": "1 year",
                          "foil2": "6 months to 1 year",
                          "foil3": "1 to 3 months",
                          "pages": [
                            "\"Most dog owners don't think their pets are hard workers. After all, most dogs spend their days eating, sleeping, and playing. But some dogs perform difficult tasks every day of their lives. These dogs are guide dogs for the blind.\"",
                            "\"Guide dog training begins at around one year of age and can last from 4 to 6 months. They start by learning to ignore distractions like loud noises, interesting smells, and other animals.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_4_1_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_4_1_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "4_4",
                          "trialId": "44102",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "A guide dog uses selective disobedience...",
                          "answer": "when it would be dangerous to follow the command.",
                          "intervention": "",
                          "foil1": "when it is angry with its handler.",
                          "foil2": "whenever it doesn't feel like following the command.",
                          "foil3": "only when it has to cross the street.",
                          "pages": [
                            "\"The dogs are taught to follow a number of spoken commands. Examples of these are \"\"sit,\"\" \"\"stay,\"\" \"\"come,\"\" \"\"forward,\"\" and \"\"heel.\"\" They also learn to keep a steady pace to the left and ahead of their handler.\"",
                            "One of the most important things that guide dogs learn is to balance obedience with their own judgment. An example of this is when they need to cross the street. Dogs are color-blind so they can't see the traffic lights change. The handler gives the command to go forward when it seems safe. But the guide dog will not obey the command if there is a car coming. This ability is called selective disobedience."
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_4_1_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_4_1_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "4_4",
                          "trialId": "44103",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"What is the meaning of the word \"\"upset\"\" as used in this passage?\"",
                          "answer": "change",
                          "intervention": "",
                          "foil1": "anger",
                          "foil2": "tip over",
                          "foil3": "bother",
                          "pages": [
                            "\"What should you do if you see a guide dog and its handler? Many people are impressed when they see a guide dog at work and want to pet or praise it. But the best thing to do is to leave the dog alone. Remember, the guide dog is working and is responsible for its handler's safety.\"",
                            "Petting or praising the dog will cause it to lose its concentration. You shouldn't feed the guide dog either. This will upset the daily feeding schedule the dog's handler is familiar with. Even small distractions can be dangerous for the dog and the handler."
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_4_1_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_4_1_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "4_4",
                          "trialId": "44104",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "What is one of the responsibilities of every guide dog?",
                          "answer": "to lead its handler in a straight line",
                          "intervention": "",
                          "foil1": "to take its handler to the coffee shop",
                          "foil2": "to work as a team with another dog",
                          "foil3": "to avoid obstacles and know where to go",
                          "pages": [
                            "One of a guide dog's responsibilities is to avoid obstacles on the ground and above. This includes recognizing passages too narrow for their handler to fit through. They are also responsible for leading their handler from one place to the next in a straight line.",
                            "\"A guide dog and its handler work as a team. The dog doesn't know where to go and the handler can't see any obstacles. They have to work together. With experience, though, a guide dog can lead its handler to a familiar place without help. The handler can say \"\"Go to the coffee shop,\"\" and the guide dog will know where to go.\"",
                            "\"The dog is known as \"\"man's best friend.\"\" But for a guide dog's handler, their dog is more than a friend; it's a partner.\""
                          ]
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_4_4_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_4_4_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_4_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "4_4",
                          "trialId": "44201",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "lead handler in straight line",
                          "intervention": "ConceptWebs",
                          "foil1": "always obey handler",
                          "foil2": "doing tricks",
                          "foil3": "distracting drivers",
                          "graphicName": "18-GuideDog"
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_4_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_4_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "4_4",
                          "trialId": "44202",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "recognize and avoid obstacles",
                          "intervention": "ConceptWebs",
                          "foil1": "going to the coffee shop",
                          "foil2": "begin training at one year of age",
                          "foil3": "loud noises and interesting smells",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_4_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_4_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "4_4",
                          "trialId": "44203",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "work as part of a team",
                          "intervention": "ConceptWebs",
                          "foil1": "man's best friend",
                          "foil2": "lose its concentration",
                          "foil3": "upset its daily feeding schedule",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_4_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_4_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "4_4",
                          "trialId": "44204",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "don't pet",
                          "intervention": "ConceptWebs",
                          "foil1": "praise the dog",
                          "foil2": "give it a treat",
                          "foil3": "give directions to the coffee shop",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_4_2_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_4_2_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "4_4",
                          "trialId": "44205",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "training",
                          "intervention": "ConceptWebs",
                          "foil1": "traits",
                          "foil2": "schedule",
                          "foil3": "handlers",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_4_2_6",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_4_2_6_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "6",
                          "passageId": "4_4",
                          "trialId": "44206",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "learn commands",
                          "intervention": "ConceptWebs",
                          "foil1": "take lots of naps",
                          "foil2": "observe traffic lights",
                          "foil3": "follow a feeding schedule",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_4_2_7",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_4_2_7_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "7",
                          "passageId": "4_4",
                          "trialId": "44207",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "avoid distractions",
                          "intervention": "ConceptWebs",
                          "foil1": "enjoy other animals",
                          "foil2": "colorblindness",
                          "foil3": "pull handler across the street",
                          "graphicName": ""
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_4_4_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_4_4_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_4_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "4_4",
                          "trialId": "44301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "18-GuideDog",
                          "question": "\"According to the concept web, knowing when it is okay to disobey is part of a guide dog's...\"",
                          "answer": "training.",
                          "intervention": "ConceptWebs",
                          "foil1": "responsibilities.",
                          "foil2": "breeding.",
                          "foil3": "communication."
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_4_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_4_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "4_4",
                          "trialId": "44302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "What should you do if you see a guide dog working?",
                          "answer": "Don't pet it.",
                          "intervention": "ConceptWebs",
                          "foil1": "Praise it.",
                          "foil2": "Feed it.",
                          "foil3": "Don't look at it."
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_4_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_4_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "4_4",
                          "trialId": "44303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"According to the concept web, which of these is part of a guide dog's training?\"",
                          "answer": "avoiding distractions",
                          "intervention": "ConceptWebs",
                          "foil1": "avoiding obstacles",
                          "foil2": "barking on command",
                          "foil3": "remembering familiar routes"
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_4_3_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_4_3_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "4_4",
                          "trialId": "44304",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "The passage states that guide dogs must recognize passages that are too narrow for their handler to fit through. Is this fact listed in the concept web?",
                          "answer": "\"No, it is not listed, because it is just one example of how guide dogs are responsible for recognizing and avoiding obstacles.\"",
                          "intervention": "ConceptWebs",
                          "foil1": "\"Yes, recognizing passages that are too narrow is listed as one of the guide dog's responsibilities.\"",
                          "foil2": "\"No, it is not listed, because it is an aspect of guide dog behavior that doesn't fall into the categories of training or responsibilities.\"",
                          "foil3": "\"Yes, but it is listed under training, because it is an advanced skill that some guide dogs never master.\""
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_4_3_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_4_3_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "4_4",
                          "trialId": "44305",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"According to the concept web, which of these is a part of a guide dog's training?\"",
                          "answer": "\"A guide dog learns to obey most of its handler's commands, but also learns when to use its own judgment.\"",
                          "intervention": "ConceptWebs",
                          "foil1": "\"A guide dog learns to recognize and avoid obstacles, as well as dangerous people and situations.\"",
                          "foil2": "A guide dog learns to use its own judgment to help its handler avoid distractions.",
                          "foil3": "\"A guide dog learns to how to help its handler, as well as how the dog and handler can work together as a team.\""
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 80
                }
              ],
              "override": {
                "passageText": [
                  "\"Most dog owners don't think their pets are hard workers. After all, most dogs spend their days eating, sleeping, and playing. But some dogs perform difficult tasks every day of their lives. These dogs are guide dogs for the blind.\"",
                  "\"Guide dog training begins at around one year of age and can last from 4 to 6 months. They start by learning to ignore distractions like loud noises, interesting smells, and other animals.\"",
                  "\"The dogs are taught to follow a number of spoken commands. Examples of these are \"\"sit,\"\" \"\"stay,\"\" \"\"come,\"\" \"\"forward,\"\" and \"\"heel.\"\" They also learn to keep a steady pace to the left and ahead of their handler.\"",
                  "One of the most important things that guide dogs learn is to balance obedience with their own judgment. An example of this is when they need to cross the street. Dogs are color-blind so they can't see the traffic lights change. The handler gives the command to go forward when it seems safe. But the guide dog will not obey the command if there is a car coming. This ability is called selective disobedience.",
                  "\"What should you do if you see a guide dog and its handler? Many people are impressed when they see a guide dog at work and want to pet or praise it. But the best thing to do is to leave the dog alone. Remember, the guide dog is working and is responsible for its handler's safety.\"",
                  "Petting or praising the dog will cause it to lose its concentration. You shouldn't feed the guide dog either. This will upset the daily feeding schedule the dog's handler is familiar with. Even small distractions can be dangerous for the dog and the handler.",
                  "One of a guide dog's responsibilities is to avoid obstacles on the ground and above. This includes recognizing passages too narrow for their handler to fit through. They are also responsible for leading their handler from one place to the next in a straight line.",
                  "\"A guide dog and its handler work as a team. The dog doesn't know where to go and the handler can't see any obstacles. They have to work together. With experience, though, a guide dog can lead its handler to a familiar place without help. The handler can say \"\"Go to the coffee shop,\"\" and the guide dog will know where to go.\"",
                  "\"The dog is known as \"\"man's best friend.\"\" But for a guide dog's handler, their dog is more than a friend; it's a partner.\""
                ]
              }
            },
            {
              "id": "B_2_4_5",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_4_5_1",
                  "type": "COWNSStage1",
                  "children": [{
                      "id": "B_2_4_5_1_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_5_1_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "4_5",
                          "trialId": "45101",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"According to the passage, which of the following is true?\"",
                          "answer": "The human brain is made up of two hemispheres: left and right.",
                          "intervention": "",
                          "foil1": "The human brain looks like a big blue blob.",
                          "foil2": "The human brain looks like a space ship.",
                          "foil3": "\"The human brain is made up of four hemispheres: front, back, top, and bottom.\"",
                          "pages": [
                            "\"Have you ever seen what a brain looks like? Well, it looks like a big gray blob. But don't be fooled by its unimpressive appearance. In fact, the human brain is the most complex thing in the known universe. It is more complicated than any computer made by human hands. It is even more complicated than a space ship!\"",
                            "\"Your brain is made up of two halves called the left hemisphere and the right hemisphere. Curiously, the left hemisphere controls the right side of your body, while the right hemisphere controls the left side of your body.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_5_1_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_5_1_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "4_5",
                          "trialId": "45102",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"According to the passage, which of the following is true?\"",
                          "answer": "The corpus callosum connects the left and right hemispheres of the brain.",
                          "intervention": "",
                          "foil1": "The two hemispheres of the brain perform similar tasks.",
                          "foil2": "The left hemisphere has exclusive control over your ability to smell.",
                          "foil3": "The corpus callosum looks similar to the Roman Coliseum.",
                          "pages": [
                            "\"The two hemispheres are responsible for different tasks. The left half of your brain takes charge of your language and math abilities, while the right half has the leading role when it comes to certain visual tasks, such as recognizing faces.\"",
                            "The two hemispheres of the brain must communicate with each other very efficiently in order for you to function correctly. Signals pass from one hemisphere to the other over a bridge of nerve fibers called the corpus callosum."
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_5_1_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_5_1_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "4_5",
                          "trialId": "45103",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"According to the passage, what would happen if someone were to cut your corpus callosum?\"",
                          "answer": "\"After seeing a picture of a horse on your left side, you would claim that you hadn't seen anything.\"",
                          "intervention": "",
                          "foil1": "\"After seeing a picture of a cowboy on a horse on your right side, you would say that you only saw a cowboy.\"",
                          "foil2": "\"After drawing a horse with your right hand, you would deny that you had drawn anything.\"",
                          "foil3": "You would be unable to see anything on your left side.",
                          "pages": [
                            "\"If someone were to cut the connection between your left and right hemispheres by cutting your corpus callosum, a lot of very strange things would happen to you. For example, if a picture of a horse were shown to you on your right side, only your left hemisphere would \"\"see\"\" the horse. In this case, you would be able to say that you saw the horse. However, if the same picture were shown on your left side, only your right hemisphere would get the information. Now you would insist that you had not seen anything, and yet, you would be able to draw the horse you were shown!\""
                          ]
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_4_5_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_4_5_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_5_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "4_5",
                          "trialId": "45201",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "left hemisphere",
                          "intervention": "ConceptWebs",
                          "foil1": "corpus callosum",
                          "foil2": "Roman coliseum",
                          "foil3": "right hemisphere",
                          "graphicName": "19-Brain"
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_5_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_5_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "4_5",
                          "trialId": "45202",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "language and math",
                          "intervention": "ConceptWebs",
                          "foil1": "drawing ability",
                          "foil2": "left hemisphere",
                          "foil3": "right hemisphere",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_5_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_5_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "4_5",
                          "trialId": "45203",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "right hemisphere",
                          "intervention": "ConceptWebs",
                          "foil1": "left hemisphere",
                          "foil2": "controls left side of body",
                          "foil3": "controls communication across hemispheres",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_5_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_5_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "4_5",
                          "trialId": "45204",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "controls left side of body",
                          "intervention": "ConceptWebs",
                          "foil1": "controls right hemisphere",
                          "foil2": "science and history",
                          "foil3": "big gray blob",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_5_2_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_5_2_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "4_5",
                          "trialId": "45205",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "recognizing faces",
                          "intervention": "ConceptWebs",
                          "foil1": "ability to smell",
                          "foil2": "learning foreign languages",
                          "foil3": "math and language",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_5_2_6",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_5_2_6_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "6",
                          "passageId": "4_5",
                          "trialId": "45206",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "corpus callosum cut",
                          "intervention": "ConceptWebs",
                          "foil1": "shown picture of horse",
                          "foil2": "correct functioning",
                          "foil3": "both hemispheres",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_5_2_7",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_5_2_7_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "7",
                          "passageId": "4_5",
                          "trialId": "45207",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "left hemisphere shown horse = person says that horse was seen",
                          "intervention": "ConceptWebs",
                          "foil1": "left hemisphere shown horse = person cannot draw or say what was seen",
                          "foil2": "\"left hemisphere shown horse = person can say what was seen, but denies having seen it\"",
                          "foil3": "left hemisphere shown horse = person says cowboy was seen",
                          "graphicName": ""
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_4_5_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_4_5_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_5_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "4_5",
                          "trialId": "45301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "19-Brain",
                          "question": "The left hemisphere... ",
                          "answer": "allows you to understand language and math.",
                          "intervention": "ConceptWebs",
                          "foil1": "controls the left side of the body.",
                          "foil2": "controls the right hemisphere.",
                          "foil3": "is located just below the brain."
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_5_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_5_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "4_5",
                          "trialId": "45302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "What is the responsibility of the corpus callosum?",
                          "answer": "The corpus callosum allows the left and right hemispheres of your brain to communicate with each other.",
                          "intervention": "ConceptWebs",
                          "foil1": "The corpus callosum interprets language information that your brain receives to help you communicate.",
                          "foil2": "\"The corpus callosum stores memories that allow you to recognize something familiar, like a picture of a horse.\"",
                          "foil3": "The corpus callosum is responsible for identifying pictures."
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_5_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_5_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "4_5",
                          "trialId": "45303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Which of the following statements is true?",
                          "answer": "The right hemisphere is important for recognizing faces.",
                          "intervention": "ConceptWebs",
                          "foil1": "The right hemisphere controls the right side of your body.",
                          "foil2": "The right hemisphere allows you to understand language and math.",
                          "foil3": "The right hemisphere communicates to the left hemisphere through the spine."
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_5_3_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_5_3_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "4_5",
                          "trialId": "45304",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Imagine that your corpus callosum has been cut. How would you react if an addition problem were shown only to your left hemisphere?",
                          "answer": "\"You would say that you saw the problem, and tell the sum.\"",
                          "intervention": "ConceptWebs",
                          "foil1": "\"You would say that you saw nothing, yet write the sum.\"",
                          "foil2": "\"You would say that you saw the problem, yet be unable to tell or write the sum.\"",
                          "foil3": "\"You would say that you saw nothing, and be unable to tell or write the sum.\""
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_5_3_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_5_3_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "4_5",
                          "trialId": "45305",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"The right hemisphere is good at recognition, yet the left hemisphere can recognize a picture of a horse. What is the most likely explanation of this?\"",
                          "answer": "\"The right hemisphere is better at recognizing faces, but the left hemisphere can do the visual processing needed to recognize a horse.\"",
                          "intervention": "ConceptWebs",
                          "foil1": "\"The left hemisphere did not need to do all of the visual processing required for recognition since it only had to name the horse, not draw it.\"",
                          "foil2": "\"Even after the corpus callosum has been cut, the two hemispheres can communicate with each other enough to recognize a horse.\"",
                          "foil3": "\"The concept web is incorrect. According to the passage, the left hemisphere is better at understanding all kinds of visual information.\""
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 80
                }
              ],
              "override": {
                "passageText": [
                  "\"Have you ever seen what a brain looks like? Well, it looks like a big gray blob. But don't be fooled by its unimpressive appearance. In fact, the human brain is the most complex thing in the known universe. It is more complicated than any computer made by human hands. It is even more complicated than a space ship!\"",
                  "\"Your brain is made up of two halves called the left hemisphere and the right hemisphere. Curiously, the left hemisphere controls the right side of your body, while the right hemisphere controls the left side of your body.\"",
                  "\"The two hemispheres are responsible for different tasks. The left half of your brain takes charge of your language and math abilities, while the right half has the leading role when it comes to certain visual tasks, such as recognizing faces.\"",
                  "The two hemispheres of the brain must communicate with each other very efficiently in order for you to function correctly. Signals pass from one hemisphere to the other over a bridge of nerve fibers called the corpus callosum.",
                  "\"If someone were to cut the connection between your left and right hemispheres by cutting your corpus callosum, a lot of very strange things would happen to you. For example, if a picture of a horse were shown to you on your right side, only your left hemisphere would \"\"see\"\" the horse. In this case, you would be able to say that you saw the horse. However, if the same picture were shown on your left side, only your right hemisphere would get the information. Now you would insist that you had not seen anything, and yet, you would be able to draw the horse you were shown!\""
                ]
              }
            },
            {
              "id": "B_2_4_6",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_4_6_1",
                  "type": "COWNSStage1",
                  "children": [{
                      "id": "B_2_4_6_1_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_6_1_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "4_6",
                          "trialId": "46101",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"According to the passage, which of the following is true?\"",
                          "answer": "Honeybees communicate by dancing.",
                          "intervention": "",
                          "foil1": "All animals communicate by smelling each other.",
                          "foil2": "Honeybees communicate by buzzing.",
                          "foil3": "Animals can't communicate with each other unless we teach them.",
                          "pages": [
                            "\"Mammals, birds, and insects have many ways of communicating besides using their voices. Honeybees, for example, communicate by dancing.\"",
                            "\"The German scientist Karl von Frisch discovered the honeybee dance. He noticed that when a worker bee finds flowers, she flies back to her hive and performs a dance for the other bees. This dance gives them directions to the flowers and tells them about the quantity and quality of the pollen.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_6_1_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_6_1_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "4_6",
                          "trialId": "46102",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"According to the passage, which of the following is true?\"",
                          "answer": "\"Honeybees perform the round dance, the waggle dance, and the vibrating dance.\"",
                          "intervention": "",
                          "foil1": "\"Honeybees perform the square dance, the polka dance, and the swing dance.\"",
                          "foil2": "Honeybees perform dances to establish a new hive and attract a queen.",
                          "foil3": "Honeybees perform dances to ask for help when fighting off invaders.",
                          "pages": [
                            "\"When a bee gets back to her hive she gives the other bees a sample of the pollen that she's found. Then, she performs one of two different dances. If the food source is close to the hive, the bee will perform the round dance. However, if the food source is located more than 50 to 75 meters away, the bee will perform the waggle dance. Another kind of dance has nothing to do with finding pollen. This is the vibrating dance, in which the bee vibrates from side to side. This is how a honeybee asks for grooming assistance.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_6_1_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_6_1_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "4_6",
                          "trialId": "46103",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"According to the passage, which of the following is true?\"",
                          "answer": "Honeybees use the sun for orientation.",
                          "intervention": "",
                          "foil1": "Honeybees use their sense of hearing to find flowers.",
                          "foil2": "Honeybees use honey to make nests.",
                          "foil3": "honeybees use the angle of the sun to calculate the season. ",
                          "pages": [
                            "\"The round dance consists of turning in circles to the left and to the right. This dance does not give information about direction, but the other bees can use the scent of their pollen samples to find their way.\"",
                            "\"When a bee is performing the waggle dance, she moves around in a figure eight. If she is facing straight up while dancing, the other bees know they must fly toward the sun to find the pollen. If she is facing straight down, the other bees know to fly away from the sun. But the bee may also perform her dance while turning away from the sun at an angle. In this case, the other bees must follow her orientation, relative to the sun, to reach the food source.\""
                          ]
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_4_6_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_4_6_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_6_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "4_6",
                          "trialId": "46201",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "honeybees: communication through dancing",
                          "intervention": "ConceptWebs",
                          "foil1": "honeybees: communication through voice",
                          "foil2": "honeybees: the farmer's friend",
                          "foil3": "honeybees: how they find pollen",
                          "graphicName": "20-BeeDancing"
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_6_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_6_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "4_6",
                          "trialId": "46202",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "discovered by Karl von Frisch",
                          "intervention": "ConceptWebs",
                          "foil1": "nutritional value of food source",
                          "foil2": "square dance = closer than 10�15 meters",
                          "foil3": "build special dancing areas in hives",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_6_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_6_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "4_6",
                          "trialId": "46203",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "round dance = closer than 50�75 meters",
                          "intervention": "ConceptWebs",
                          "foil1": "vibrating dance = closer than 50�75 meters",
                          "foil2": "follows the scent of pollen samples",
                          "foil3": "tells distance of water source",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_6_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_6_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "4_6",
                          "trialId": "46204",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "waggle dance = farther than 50�75 meters",
                          "intervention": "ConceptWebs",
                          "foil1": "directions to the flowers",
                          "foil2": "quantity and quality of pollen",
                          "foil3": "danger to the hive",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_6_2_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_6_2_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "4_6",
                          "trialId": "46205",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "tells direction of food source",
                          "intervention": "ConceptWebs",
                          "foil1": "finds location of karl von frisch",
                          "foil2": "food is at an angle relative to the sun = dance facing west",
                          "foil3": "describes flower type and quantity",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_6_2_6",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_6_2_6_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "6",
                          "passageId": "4_6",
                          "trialId": "46206",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "dance facing down = fly away from sun",
                          "intervention": "ConceptWebs",
                          "foil1": "waggle dance = fly away from sun",
                          "foil2": "circle dance = farther than 50�75 meters",
                          "foil3": "dance around pollen = fly in circles around hive",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_6_2_7",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_6_2_7_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "7",
                          "passageId": "4_6",
                          "trialId": "46207",
                          "stageType": "Strategy",
                          "taskType": "BuildWeb",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "vibrating dance = needs help grooming",
                          "intervention": "ConceptWebs",
                          "foil1": "figure eight dance = describes quality of pollen",
                          "foil2": "use scent of pollen samples to find flowers",
                          "foil3": "store honey to survive in winter",
                          "graphicName": ""
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_4_6_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_4_6_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_6_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "4_6",
                          "trialId": "46301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "20-BeeDancing",
                          "question": "Which of the following directions is not given by a dancing bee according to the concept web?",
                          "answer": "Fly facing up.",
                          "intervention": "ConceptWebs",
                          "foil1": "Fly toward the sun.",
                          "foil2": "Fly in the same direction I am facing.",
                          "foil3": "Help me groom myself."
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_6_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_6_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "4_6",
                          "trialId": "46302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "A honeybee will perform the round dance when...",
                          "answer": "she has found pollen less than 50 meters from the hive.",
                          "intervention": "ConceptWebs",
                          "foil1": "there is no pollen to be found.",
                          "foil2": "she is moving rapidly from side to side.",
                          "foil3": "the sun is too low in the sky for her to use it as a landmark."
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_6_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_6_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "4_6",
                          "trialId": "46303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"How would a honeybee guide other bees to a pollen source located 90 meters from the hive, in the direction of the sun?\"",
                          "answer": "She would perform the waggle dance while facing up.",
                          "intervention": "ConceptWebs",
                          "foil1": "She would perform the round dance while facing up.",
                          "foil2": "She would perform the waggle dance while facing down.",
                          "foil3": "She would perform the round dance while facing down."
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_6_3_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_6_3_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "4_6",
                          "trialId": "46304",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"When a bee dances facing straight up, she is telling the hive...\"",
                          "answer": "about the location of a food source.",
                          "intervention": "ConceptWebs",
                          "foil1": "that food is in a direction opposite the sun.",
                          "foil2": "that food is less than 75 meters away.",
                          "foil3": "about the quality of the pollen."
                        }
                      }]
                    },
                    {
                      "id": "B_2_4_6_3_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_4_6_3_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "4_6",
                          "trialId": "46305",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"Honeybees may give pollen samples to help others find the source. Given the topic of the concept web, should this fact be included?\"",
                          "answer": "\"No, this concept web focuses on bee dancing, not all forms of bee communication.\"",
                          "intervention": "ConceptWebs",
                          "foil1": "\"No, the pollen samples are given as gifts, rather than being used for communication.\"",
                          "foil2": "\"Yes, the pollen samples are important for helping the honeybees find the pollen source.\"",
                          "foil3": "\"Yes, this gift of pollen is what makes all the bees dance.\""
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 80
                }
              ],
              "override": {
                "passageText": [
                  "\"Mammals, birds, and insects have many ways of communicating besides using their voices. Honeybees, for example, communicate by dancing.\"",
                  "\"The German scientist Karl von Frisch discovered the honeybee dance. He noticed that when a worker bee finds flowers, she flies back to her hive and performs a dance for the other bees. This dance gives them directions to the flowers and tells them about the quantity and quality of the pollen.\"",
                  "\"When a bee gets back to her hive she gives the other bees a sample of the pollen that she's found. Then, she performs one of two different dances. If the food source is close to the hive, the bee will perform the round dance. However, if the food source is located more than 50 to 75 meters away, the bee will perform the waggle dance. Another kind of dance has nothing to do with finding pollen. This is the vibrating dance, in which the bee vibrates from side to side. This is how a honeybee asks for grooming assistance.\"",
                  "\"The round dance consists of turning in circles to the left and to the right. This dance does not give information about direction, but the other bees can use the scent of their pollen samples to find their way.\"",
                  "\"When a bee is performing the waggle dance, she moves around in a figure eight. If she is facing straight up while dancing, the other bees know they must fly toward the sun to find the pollen. If she is facing straight down, the other bees know to fly away from the sun. But the bee may also perform her dance while turning away from the sun at an angle. In this case, the other bees must follow her orientation, relative to the sun, to reach the food source.\""
                ]
              }
            }
          ]
        },
        {
          "id": "B_2_5",
          "type": "COWNSLevel",
          "description": "Level 5 Node",
          "override": {
            "level": 5
          },
          "children": [{
              "id": "B_2_5_1",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_5_1_1",
                  "type": "COWNSStage1",
                  "children": [{
                      "id": "B_2_5_1_1_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_1_1_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "5_1",
                          "trialId": "51101",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"According to the passage, which of these ingredients are necessary for making ice cream?\"",
                          "answer": "\"sugar, milk, cream, salt, vanilla, and ice \"",
                          "intervention": "",
                          "foil1": "\"salt, milk, chocolate chips, and sugar \"",
                          "foil2": "\"milk, ice, nuts, sugar, cream, and vanilla \"",
                          "foil3": "\"chocolate chips, cream, sugar, and milk\"",
                          "pages": [
                            "Making your own ice cream at home is fun and easy. All you need is a few basic ingredients and a couple of containers.",
                            "\"Your first step is to go to the store and buy cream, milk, sugar, salt, and vanilla. For different flavors, you could get some extra ingredients such as chocolate chips. Finally, unless you already have lots of ice at home, pick up a bag of ice cubes.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_1_1_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_1_1_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "5_1",
                          "trialId": "51102",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"In the instruction, \"\"seal it with tape,\"\" what is the pronoun \"\"it\"\" referring to?\"",
                          "answer": "the small container",
                          "intervention": "",
                          "foil1": "the bag of salt",
                          "foil2": "\"a large, empty coffee container\"",
                          "foil3": "the seal",
                          "pages": [
                            "\"Now that you've got all your ingredients, you need to find some containers with lids. You might use a small empty coffee can and a large empty coffee can.\"",
                            "Put everything except the salt and ice in the small container and seal it with tape. ",
                            "\"Place your small container inside the large container. Pour your salt and a bunch of ice in the large container. Now, seal the large container. \""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_1_1_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_1_1_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "5_1",
                          "trialId": "51103",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "Why is it necessary to wipe off the small container before opening it?",
                          "answer": "because it will be covered with salt and water that you don't want to get in your ice cream ",
                          "intervention": "",
                          "foil1": "\"because you have to wipe off the label that says \"\"coffee\"\" because you've replaced the coffee with ice cream \"",
                          "foil2": "because it will be dirty after being rolled all over the room ",
                          "foil3": "because it will be covered with ice cream and sugar ",
                          "pages": [
                            "Now it's time to shake and roll your large container all over the room. Make sure you shake it really well. ",
                            "\"After 30 minutes of shaking you may open your large container and take out the small one. Wipe off the small container and open it. Congratulations, you may now enjoy your ice cream!\""
                          ]
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_5_1_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_5_1_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_1_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "5_1",
                          "trialId": "51201",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "find small & large containers",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "get recipe",
                          "foil2": "get large container",
                          "foil3": "put salt in large container & seal it",
                          "graphicName": "21-IceCream"
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_1_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_1_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "5_1",
                          "trialId": "51202",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "seal & tape small container",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "shake container",
                          "foil2": "wipe outside of container",
                          "foil3": "put ice & salt in small container",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_1_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_1_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "5_1",
                          "trialId": "51203",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "pour salt & ice inside large container",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "roll large container",
                          "foil2": "seal & tape small container",
                          "foil3": "mix ice with cream",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_1_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_1_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "5_1",
                          "trialId": "51204",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "wipe small container & open it",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "remove tape & open large container",
                          "foil2": "shake the small container",
                          "foil3": "scoop into cones & sprinkle with nuts",
                          "graphicName": ""
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_5_1_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_5_1_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_1_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "5_1",
                          "trialId": "51301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "21-IceCream",
                          "question": "What step comes right before you place the small container in the large container?",
                          "answer": "using tape to seal the lid on the small container",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "thoroughly shaking the small container to mix the ingredients",
                          "foil2": "adding ice to the large container",
                          "foil3": "\"filling the small container with cream, milk, sugar, and vanilla\""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_1_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_1_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "5_1",
                          "trialId": "51302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "What do you do with the salt?",
                          "answer": "The salt goes in the large container with the ice.",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "The salt goes in the small container with everything but the ice.",
                          "foil2": "\"The salt is an optional flavoring for the ice cream, and it is sprinkled on top.\"",
                          "foil3": "The salt goes in the large container with the milk."
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_1_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_1_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "5_1",
                          "trialId": "51303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Is it better to seal the large container before the small one?",
                          "answer": "\"No, the sealed small container must go inside the large one.\"",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "\"No, it doesn't matter which container is sealed first.\"",
                          "foil2": "\"Yes, the small container holds all the ingredients.\"",
                          "foil3": "\"Yes, the large container contains the ice, which will melt if the container isn't sealed.\""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_1_3_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_1_3_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "5_1",
                          "trialId": "51304",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"According to the flowchart, what kinds of containers do you need?\"",
                          "answer": "a larger container and a smaller container",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "coffee containers with lids",
                          "foil2": "any ice cream containers",
                          "foil3": "three containers of roughly the same size"
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_1_3_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_1_3_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "5_1",
                          "trialId": "51305",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"According to the flowchart, which of these ingredients is not needed? \"",
                          "answer": "chocolate chips",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "salt",
                          "foil2": "vanilla",
                          "foil3": "sugar"
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 80
                }
              ],
              "override": {
                "passageText": [
                  "Making your own ice cream at home is fun and easy. All you need is a few basic ingredients and a couple of containers.",
                  "\"Your first step is to go to the store and buy cream, milk, sugar, salt, and vanilla. For different flavors, you could get some extra ingredients such as chocolate chips. Finally, unless you already have lots of ice at home, pick up a bag of ice cubes.\"",
                  "\"Now that you've got all your ingredients, you need to find some containers with lids. You might use a small empty coffee can and a large empty coffee can.\"",
                  "Put everything except the salt and ice in the small container and seal it with tape. ",
                  "\"Place your small container inside the large container. Pour your salt and a bunch of ice in the large container. Now, seal the large container. \"",
                  "Now it's time to shake and roll your large container all over the room. Make sure you shake it really well. ",
                  "\"After 30 minutes of shaking you may open your large container and take out the small one. Wipe off the small container and open it. Congratulations, you may now enjoy your ice cream!\""
                ]
              }
            },
            {
              "id": "B_2_5_2",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_5_2_1",
                  "type": "COWNSStage1",
                  "children": [{
                      "id": "B_2_5_2_1_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_2_1_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "5_2",
                          "trialId": "52101",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "What is not one of the three R's of waste management?",
                          "answer": "return",
                          "intervention": "",
                          "foil1": "reduce",
                          "foil2": "recycle",
                          "foil3": "reuse",
                          "pages": [
                            "\"Controlling the amount of waste we produce is important for keeping our environment healthy. We can do this by using the three R's of waste management: reduce, reuse, and recycle.\"",
                            "\"The first step in controlling waste is finding ways to reduce it. For example, try to buy only what you need, and buy bulk products with less packaging. Using less means that less waste is produced.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_2_1_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_2_1_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "5_2",
                          "trialId": "52102",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "Why should you check with charities before throwing away furniture?",
                          "answer": "\"Charities can find new homes for furniture, so that it is reused.\"",
                          "intervention": "",
                          "foil1": "\"Charities will buy the furniture from you, so that you can afford new things.\"",
                          "foil2": "\"You're required by law to ask first, because charities depend on furniture donations.\"",
                          "foil3": "\"Charities will reduce the furniture, so you don't have to throw it away.\"",
                          "pages": [
                            "\"The next step is identifying things that can be reused. For example, plastic cups and plates can be used over and over if you wash them.\"",
                            "\"Don't assume that you must send old furniture to the garbage dump. Someone else might love to reuse that old chair! So, before you trash it, try donating it to a local charity.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_2_1_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_2_1_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "5_2",
                          "trialId": "52103",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"According to the passage, what might soda bottles be recycled into?\"",
                          "answer": "clothes",
                          "intervention": "",
                          "foil1": "phones",
                          "foil2": "more bottles",
                          "foil3": "books",
                          "pages": [
                            "\"Of course, you can't reduce or reuse everything. This is where the last step, recycling, comes in. Recycling turns old things into new things. For example, those old plastic soda bottles that you put in the recycling bin might be made into new clothes. It also helps to buy things that are made with recycled materials.\"",
                            "Following the three R's is an easy way to make the environment better for yourself and others."
                          ]
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_5_2_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_5_2_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_2_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "5_2",
                          "trialId": "52201",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "buy less",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "buy more",
                          "foil2": "drink juice instead of soda",
                          "foil3": "donate old clothes",
                          "graphicName": "22-Recycling"
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_2_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_2_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "5_2",
                          "trialId": "52202",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "Step 2: Reuse",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "Step 2: Refuse",
                          "foil2": "Step 2: Remove",
                          "foil3": "Step 2: Recycle",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_2_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_2_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "5_2",
                          "trialId": "52203",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "donate old furniture",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "buy in bulk",
                          "foil2": "separate newspapers from trash",
                          "foil3": "make your own clothing",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_2_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_2_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "5_2",
                          "trialId": "52204",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "buy things made with recycled materials",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "put throw covers on old furniture",
                          "foil2": "use paper cups again after washing them",
                          "foil3": "keep the environment healthy",
                          "graphicName": ""
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_5_2_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_5_2_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_2_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "5_2",
                          "trialId": "52301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "22-Recycling",
                          "question": "\"Which of the following belongs in the \"\"reduce\"\" category?\"",
                          "answer": "buying in bulk",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "donating old furniture",
                          "foil2": "recycling newspapers",
                          "foil3": "reusing plastic cups"
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_2_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_2_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "5_2",
                          "trialId": "52302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"According to the flowchart, which of the following is reusable?\"",
                          "answer": "furniture",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "plastic bottles",
                          "foil2": "paper cups",
                          "foil3": "bulk products"
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_2_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_2_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "5_2",
                          "trialId": "52303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Donating old furniture is an effective way to manage waste because...",
                          "answer": "the furniture will be reused by someone else.",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "donating supports charities.",
                          "foil2": "you can buy less if you donate.",
                          "foil3": "donated furniture can be turned into something new."
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_2_3_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_2_3_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "5_2",
                          "trialId": "52304",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Which of the following is true?",
                          "answer": "\"After reusing, the next step is recycling.\"",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "\"After recycling, the next step is reusing.\"",
                          "foil2": "Recycling is the step before reusing.",
                          "foil3": "Reusing is the step before reducing."
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_2_3_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_2_3_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "5_2",
                          "trialId": "52305",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Which of the following suggestions for good waste management is NOT listed in the flowchart?",
                          "answer": "bringing your own bags to the grocery store",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "buying only what you need",
                          "foil2": "reusing old furniture by donating it to charity",
                          "foil3": "buying products that contain recycled material"
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 80
                }
              ],
              "override": {
                "passageText": [
                  "\"Controlling the amount of waste we produce is important for keeping our environment healthy. We can do this by using the three R's of waste management: reduce, reuse, and recycle.\"",
                  "\"The first step in controlling waste is finding ways to reduce it. For example, try to buy only what you need, and buy bulk products with less packaging. Using less means that less waste is produced.\"",
                  "\"The next step is identifying things that can be reused. For example, plastic cups and plates can be used over and over if you wash them.\"",
                  "\"Don't assume that you must send old furniture to the garbage dump. Someone else might love to reuse that old chair! So, before you trash it, try donating it to a local charity.\"",
                  "\"Of course, you can't reduce or reuse everything. This is where the last step, recycling, comes in. Recycling turns old things into new things. For example, those old plastic soda bottles that you put in the recycling bin might be made into new clothes. It also helps to buy things that are made with recycled materials.\"",
                  "Following the three R's is an easy way to make the environment better for yourself and others."
                ]
              }
            },
            {
              "id": "B_2_5_3",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_5_3_1",
                  "type": "COWNSStage1",
                  "children": [{
                      "id": "B_2_5_3_1_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_3_1_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "5_3",
                          "trialId": "53101",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "Who did Linh see riding by on a blue bicycle?",
                          "answer": "a girl who is new to the school",
                          "intervention": "",
                          "foil1": "her new science teacher",
                          "foil2": "\"her old friend, catherine\"",
                          "foil3": "a girl from the science fair",
                          "pages": [
                            "\"Hurrying toward the front of the school, Linh checked her watch. It was 3:12, so she was right on time. Linh met her friends, Catherine, Esteban, and Miguel, on the school's front lawn, every day at 3:15. Linh was excited about her project for the sixth-grade science fair. She hoped she could get Catherine's help putting it together.\"",
                            "\"Suddenly, a whoosh of blue flew past, traveling north. Linh saw the new girl from her science class, pedaling quickly on a blue bicycle with a long blue hair ribbon flying behind her. Linh wanted to call out, but she hadn't learned the girl's name yet. Anyway, Catherine and Esteban were already waiting for her on the grass.\"",
                            "\"\"\"Hi guys,\"\" Linh called, \"\"no Miguel yet?\"\"\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_3_1_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_3_1_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "5_3",
                          "trialId": "53102",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "Which piece of information is NOT involved in Esteban and Catherine's argument?",
                          "answer": "Esteban says that the new girl's name is Natali.",
                          "intervention": "",
                          "foil1": "Catherine saw the new girl at the market at 3:00.",
                          "foil2": "Esteban saw the new girl at the library at 2:55.",
                          "foil3": "It takes 10 minutes to bike from the library to the market.",
                          "pages": [
                            "\"\"\"Miguel will show up late, as usual,\"\" laughed Esteban. \"\"If my brother ever arrives on time, I'll die of shock!\"\"\"",
                            "\"\"\"Hey,\"\" said Linh, \"\"does anyone know the new girl? She's in my science class, but I didn't catch her name.\"\"\"",
                            "\"\"\"I haven't met her,\"\" responded Catherine, \"\"but I saw her at that market on the hill fifteen minutes ago, right at 3:00.\"\"\"",
                            "\"\"\"She's in my history class. Her name is Natali,\"\" said Esteban. \"\"But you couldn't have seen her at the market at 3:00. I saw her at the library at 2:55. I checked the time.\"\"\"",
                            "\"\"\"So did I!\"\" said Catherine, a bit annoyed. \"\"Your watch must be wrong. I definitely saw her at 3:00, and it is at least a ten minute ride from the library to the market.\"\"\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_3_1_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_3_1_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "5_3",
                          "trialId": "53103",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "About which piece of information would they all agree?",
                          "answer": "The new girl is named Natali.",
                          "intervention": "",
                          "foil1": "The new girl wears a red hair ribbon.",
                          "foil2": "The new girl rides a bike.",
                          "foil3": "The new girl was in the library at 3:00.",
                          "pages": [
                            "\"Just as Esteban had predicted, Miguel showed up a couple minutes later: \"\"Sorry I'm late, did I miss anything?\"\"\"",
                            "\"\"\"We were just talking about Natali, the new girl,\"\" said Linh.\"",
                            "\"\"\"Oh, I just saw her skateboarding toward the south end of campus,\"\" said Miguel. \"\"That's when I realized it was 3:15, and I was late.\"\"\"",
                            "\"\"\"Riding a skateboard?\"\" wondered Linh. \"\"I just saw her riding her bike heading north. Are you sure it was Natali?\"\" \"",
                            "\"\"\"It's hard to mistake her red hair ribbon,\"\" replied Miguel.\"",
                            "\"\"\"That's weird!\"\" Linh said. \"\"I know I saw her, but she was wearing a blue hair ribbon�the same color as her bike.\"\"\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_3_1_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_3_1_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "5_3",
                          "trialId": "53104",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "What did Linh figure out at the end of the story?",
                          "answer": "Natali is probably a twin.",
                          "intervention": "",
                          "foil1": "\"Natali owns a bicycle, a skateboard, and two hair ribbons.\"",
                          "foil2": "Natali's mother drove her from the library to the market.",
                          "foil3": "Natali is not in Esteban's history class.",
                          "pages": [
                            "\"\"\"No, Miguel is right about her hair ribbon being red. I saw it in class, and again at the library,\"\" said Esteban.\"",
                            "\"\"\"I don't know why everyone is so confused. She was wearing a blue ribbon at the market,\"\" Catherine chimed in.\"",
                            "\"Everyone was stumped. They all checked their watches: all of them said the same time. How could Natali be at both the library and the market? Why was she biking north, then skateboarding south? And what color was her hair ribbon?\"",
                            "\"Linh was still puzzled as she walked home. They were all good observers, so how could so many of them be wrong?\"",
                            "\"At home, she drew a timeline of all the Natali sightings. It seemed impossible, but then Linh had a new idea. If she was right, it would explain everything.\""
                          ]
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_5_3_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_5_3_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_3_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "5_3",
                          "trialId": "53201",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "at the library",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "at the market",
                          "foil2": "science class",
                          "foil3": "on the lawn",
                          "graphicName": "23-Mystery"
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_3_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_3_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "5_3",
                          "trialId": "53202",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "Catherine",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "Linh",
                          "foil2": "Miguel",
                          "foil3": "Esteban",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_3_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_3_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "5_3",
                          "trialId": "53203",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "blue ribbon",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "red ribbon",
                          "foil2": "red bicycle",
                          "foil3": "blue bicycle",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_3_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_3_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "5_3",
                          "trialId": "53204",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "Linh",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "Esteban",
                          "foil2": "Miguel",
                          "foil3": "Natali",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_3_2_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_3_2_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "5_3",
                          "trialId": "53205",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "bicycling north",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "at the market",
                          "foil2": "history class",
                          "foil3": "science class",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_3_2_6",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_3_2_6_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "6",
                          "passageId": "5_3",
                          "trialId": "53206",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "blue ribbon",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "red ribbon",
                          "foil2": "red bicycle",
                          "foil3": "blue bicycle",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_3_2_7",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_3_2_7_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "7",
                          "passageId": "5_3",
                          "trialId": "53207",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "skateboarding south",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "blue ribbon",
                          "foil2": "red ribbon",
                          "foil3": "skateboarding north",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_3_2_8",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_3_2_8_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "8",
                          "passageId": "5_3",
                          "trialId": "53208",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "red ribbon",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "blue ribbon",
                          "foil2": "at the library",
                          "foil3": "at the market",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_3_2_9",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_3_2_9_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "9",
                          "passageId": "5_3",
                          "trialId": "53209",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "library to market: 10 min. ride",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "sightings from previous day",
                          "foil2": "observations that conflict",
                          "foil3": "esteban learns natali's name",
                          "graphicName": ""
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_5_3_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_5_3_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_3_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "5_3",
                          "trialId": "53301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "23-Mystery",
                          "question": "Where is the biggest time conflict in this chart?",
                          "answer": "Being at the library at 2:55 and at the market at 3:00.",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "Bicycling north at 3:12 and skateboarding south at 3:15.",
                          "foil2": "Being in the market at 3:00 and riding a blue bike at 3:12.",
                          "foil3": "Wearing a red ribbon at 2:55 and a blue ribbon at 3:12."
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_3_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_3_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "5_3",
                          "trialId": "53302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"Assuming that Linh is right, the person she saw was Natali's twin sister. What did Natali's twin do after school?\"",
                          "answer": "She went to the market and then bicycled north.",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "She went to the library and then skateboarded north.",
                          "foil2": "She went to the market and then bicycled south.",
                          "foil3": "She went to the library and then skateboarded south."
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_3_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_3_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "5_3",
                          "trialId": "53303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Which of the friends probably saw the same sister?",
                          "answer": "Esteban & Miguel",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "Catherine & Miguel",
                          "foil2": "Catherine & Esteban",
                          "foil3": "Linh & Esteban"
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_3_3_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_3_3_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "5_3",
                          "trialId": "53304",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"Assuming that Esteban really saw Natali, what is the strongest evidence that Catherine saw Natali's twin sister?\"",
                          "answer": "Natali could not have been at the market five minutes after being at the library.",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "\"Natali was wearing a red ribbon, and the girl at the market was wearing a blue one.\"",
                          "foil2": "Both Natali and the girl at the market were wearing a blue ribbon and riding a blue bicycle.",
                          "foil3": "It is a ten minute bike ride from the library to the market and Linh saw a girl riding a bicycle."
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_3_3_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_3_3_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "5_3",
                          "trialId": "53305",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "When was the last sighting of Natali or her twin sister?",
                          "answer": "3:15",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "3:20",
                          "foil2": "3:55",
                          "foil3": "3:12"
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 80
                }
              ],
              "override": {
                "passageText": [
                  "\"Hurrying toward the front of the school, Linh checked her watch. It was 3:12, so she was right on time. Linh met her friends, Catherine, Esteban, and Miguel, on the school's front lawn, every day at 3:15. Linh was excited about her project for the sixth-grade science fair. She hoped she could get Catherine's help putting it together.\"",
                  "\"Suddenly, a whoosh of blue flew past, traveling north. Linh saw the new girl from her science class, pedaling quickly on a blue bicycle with a long blue hair ribbon flying behind her. Linh wanted to call out, but she hadn't learned the girl's name yet. Anyway, Catherine and Esteban were already waiting for her on the grass.\"",
                  "\"\"\"Hi guys,\"\" Linh called, \"\"no Miguel yet?\"\"\"",
                  "\"\"\"Miguel will show up late, as usual,\"\" laughed Esteban. \"\"If my brother ever arrives on time, I'll die of shock!\"\"\"",
                  "\"\"\"Hey,\"\" said Linh, \"\"does anyone know the new girl? She's in my science class, but I didn't catch her name.\"\"\"",
                  "\"\"\"I haven't met her,\"\" responded Catherine, \"\"but I saw her at that market on the hill fifteen minutes ago, right at 3:00.\"\"\"",
                  "\"\"\"She's in my history class. Her name is Natali,\"\" said Esteban. \"\"But you couldn't have seen her at the market at 3:00. I saw her at the library at 2:55. I checked the time.\"\"\"",
                  "\"\"\"So did I!\"\" said Catherine, a bit annoyed. \"\"Your watch must be wrong. I definitely saw her at 3:00, and it is at least a ten minute ride from the library to the market.\"\"\"",
                  "\"Just as Esteban had predicted, Miguel showed up a couple minutes later: \"\"Sorry I'm late, did I miss anything?\"\"\"",
                  "\"\"\"We were just talking about Natali, the new girl,\"\" said Linh.\"",
                  "\"\"\"Oh, I just saw her skateboarding toward the south end of campus,\"\" said Miguel. \"\"That's when I realized it was 3:15, and I was late.\"\"\"",
                  "\"\"\"Riding a skateboard?\"\" wondered Linh. \"\"I just saw her riding her bike heading north. Are you sure it was Natali?\"\" \"",
                  "\"\"\"It's hard to mistake her red hair ribbon,\"\" replied Miguel.\"",
                  "\"\"\"That's weird!\"\" Linh said. \"\"I know I saw her, but she was wearing a blue hair ribbon�the same color as her bike.\"\"\"",
                  "\"\"\"No, Miguel is right about her hair ribbon being red. I saw it in class, and again at the library,\"\" said Esteban.\"",
                  "\"\"\"I don't know why everyone is so confused. She was wearing a blue ribbon at the market,\"\" Catherine chimed in.\"",
                  "\"Everyone was stumped. They all checked their watches: all of them said the same time. How could Natali be at both the library and the market? Why was she biking north, then skateboarding south? And what color was her hair ribbon?\"",
                  "\"Linh was still puzzled as she walked home. They were all good observers, so how could so many of them be wrong?\"",
                  "\"At home, she drew a timeline of all the Natali sightings. It seemed impossible, but then Linh had a new idea. If she was right, it would explain everything.\""
                ]
              }
            },
            {
              "id": "B_2_5_4",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_5_4_1",
                  "type": "COWNSStage1",
                  "children": [{
                      "id": "B_2_5_4_1_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_4_1_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "5_4",
                          "trialId": "54101",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "Why was polio so frightening?",
                          "answer": "It spread very quickly.",
                          "intervention": "",
                          "foil1": "It began in 1894.",
                          "foil2": "It caused paralysis in most people.",
                          "foil3": "It caused blindness in most people.",
                          "pages": [
                            "\"Polio is largely under control today, but it was one of the most frightening diseases of the past century. The symptoms of polio are wildly variable. Most people have no symptoms. Others just have flu-like symptoms. However, in some people, polio attacks the spinal cord. This causes paralysis, often in the legs. Many polio victims must use a wheelchair for the rest of their lives.\"",
                            "\"Polio has been around for a long time, but it first appeared in the United States in 1894. The disease spread quickly, especially among children. Over the next few decades, the United States had many polio epidemics. The epidemics affected thousands of people and caused widespread panic.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_4_1_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_4_1_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "5_4",
                          "trialId": "54102",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "Which president had polio?",
                          "answer": "Franklin Delano Roosevelt",
                          "intervention": "",
                          "foil1": "William Henry Harrison",
                          "foil2": "Theodore Roosevelt",
                          "foil3": "John F. Kennedy",
                          "pages": [
                            "\"At first, doctors did not understand what caused polio. Yet they had many theories and tried many treatments. Some blamed overheating, while others blamed catching a chill. Some doctors insisted on bed rest, while others put casts on patients' legs. In the 1920s, a medicine was made from the blood of recovered polio victims. Sadly, none of these treatments were effective.\"",
                            "\"Some treatments did help to relieve the symptoms of polio. In 1940, an Australian nurse known as Sister Kenny came to the U.S. with a treatment to reduce paralysis. Her approach, which included moist hot packs and stretching, is still used today.\"",
                            "\"Franklin Delano Roosevelt, our 32nd president, had paralyzed legs due to polio. In 1926, he opened a treatment center in Warm Springs, Georgia. He had found it helpful to swim in the warm pools there.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_4_1_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_4_1_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "5_4",
                          "trialId": "54103",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "What did the earlier vaccine researchers do differently from Jonas Salk?",
                          "answer": "They used live poliovirus in their vaccines.",
                          "intervention": "",
                          "foil1": "They looked for a treatment for paralysis.",
                          "foil2": "They made vaccines using antibodies from people who had recovered from the disease.",
                          "foil3": "They were medical researchers.",
                          "pages": [
                            "\"In 1932, president Franklin Delano Roosevelt took office. This brought more attention and energy to the field of polio research. Scientists had already discovered that polio was caused by a virus. Now the question was, could they develop a vaccine that would protect people from it?\"",
                            "\"When you are exposed to a virus, your immune system produces antibodies to kill it. Then, if that virus comes along again, you can fight it off. The problem is that an effective vaccine must trigger antibody production, without giving you the disease.\"",
                            "\"Several scientists attempted to develop polio vaccines. In 1935, two vaccines using live poliovirus were tested, but both failed. The problem wouldn't be solved until the early 1950s, when a medical researcher named Jonas Salk took a different approach. His vaccine used a killed form of the poliovirus.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_4_1_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_4_1_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "5_4",
                          "trialId": "54104",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "Why hasn't polio been brought under control in some countries?",
                          "answer": "Not everyone has been vaccinated.",
                          "intervention": "",
                          "foil1": "Some countries have more poliovirus than others.",
                          "foil2": "Not everyone can rest enough to recover from polio.",
                          "foil3": "Scientists and doctors are not always successful at fighting diseases.",
                          "pages": [
                            "\"In 1954, a large-scale test proved that Salk's vaccine was effective. News of Salk's success was met with great fanfare. All over the country people celebrated�even ringing church bells and sounding the sirens of fire engines.\"",
                            "\"In 1955, doctors began a nationwide immunization program. The U.S. had 35,000 cases of polio in 1953. However, by 1957, that number had dropped to 6,000 cases.\"",
                            "\"Today, polio is under control in many countries. The World Health Organization (WHO) is running vaccine programs in countries still affected by polio, and hopes to completely stamp out the disease by 2008.\""
                          ]
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_5_4_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_5_4_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_4_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "5_4",
                          "trialId": "54201",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "1894: polio appears in us",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "1935: polio appears in us",
                          "foil2": "1894: some have flu-like symptoms",
                          "foil3": "1935: some have flu-like symptoms",
                          "graphicName": "24-Polio"
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_4_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_4_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "5_4",
                          "trialId": "54202",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "1926: F.D. Roosevelt opens Warm Springs treatment center",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "1926: Jonas Salk opens Warm Springs treatment center",
                          "foil2": "1926: swimming in warm pools proven to cure polio",
                          "foil3": "1926: bed rest and casts proven to cure polio",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_4_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_4_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "5_4",
                          "trialId": "54203",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "1935: early vaccines fail",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "1935: early vaccines succeed",
                          "foil2": "1935: first polio epidemic",
                          "foil3": "1935: last polio epidemic",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_4_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_4_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "5_4",
                          "trialId": "54204",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "1940: Sister Kenny brings paralysis treatment to U.S.",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "1930: Sister Kenny brings paralysis treatment to U.S.",
                          "foil2": "1940: Sister Kenny brings polio vaccine to U.S.",
                          "foil3": "1930: Sister Kenny brings polio vaccine to U.S.",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_4_2_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_4_2_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "5_4",
                          "trialId": "54205",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "1954: Jonas Salk shows that his new vaccine is effective.",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "1954: Jonas Salk shows that using casts is ineffective.",
                          "foil2": "1954: Jonas Salk shows that polio is caused by a virus.",
                          "foil3": "1954: Jonas Salk shows that poliovirus is getting stronger.",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_4_2_6",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_4_2_6_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "6",
                          "passageId": "5_4",
                          "trialId": "54206",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "\"1953: 35,000 polio cases\"",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "\"1941: 5,000 polio cases\"",
                          "foil2": "\"1956: 28,000 polio cases\"",
                          "foil3": "\"1961: 8,000 polio cases\"",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_4_2_7",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_4_2_7_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "7",
                          "passageId": "5_4",
                          "trialId": "54207",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "\"1957: 6,000 polio cases\"",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "\"1957: 36,000 polio cases\"",
                          "foil2": "people celebrated",
                          "foil3": "new poliovirus discovered",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_4_2_8",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_4_2_8_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "8",
                          "passageId": "5_4",
                          "trialId": "54208",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "2008: who hopes to end polio worldwide",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "2008: polio stamped out worldwide",
                          "foil2": "2001: cure for polio discovered",
                          "foil3": "2001: u.s. polio antibodies under control",
                          "graphicName": ""
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_5_4_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_5_4_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_4_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "5_4",
                          "trialId": "54301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "24-Polio",
                          "question": "\"According to the timeline, what did Franklin Delano Roosevelt do before becoming President of the United States?\"",
                          "answer": "\"He opened a treatment center in Warm Springs, Georgia.\"",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "He contracted polio and was left with paralysis of the legs.",
                          "foil2": "He worked to bring more attention and energy to the field of polio research.",
                          "foil3": "He worked in the field of medical research."
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_4_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_4_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "5_4",
                          "trialId": "54302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "When was a treatment that effectively helped to reduce paralysis imported to the United States?",
                          "answer": "1940",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "1935",
                          "foil2": "1920s",
                          "foil3": "1953"
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_4_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_4_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "5_4",
                          "trialId": "54303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"Approximately how many years passed between polio appearing in the United States, and discovery of an effective vaccine?\"",
                          "answer": "60",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "100",
                          "foil2": "30",
                          "foil3": "120"
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_4_3_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_4_3_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "5_4",
                          "trialId": "54304",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"From looking at the timeline, what is the most likely explanation for the 83% reduction in polio cases between 1953 and 1957?\"",
                          "answer": "The nationwide immunization program using Salk's vaccine.",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "The 1955 immunization program using blood from recovered patients.",
                          "foil2": "\"The national program for health education, nutrition, and hygiene.\"",
                          "foil3": "The introduction of effective treatments such as Jonas Salk's vaccine and Sister Kenny's paralysis treatment."
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_4_3_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_4_3_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "5_4",
                          "trialId": "54305",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Why does the timeline turn from a solid line to a dashed line at the very right-hand side? (Hint: this timeline was created in 2005.)",
                          "answer": "\"Most of the timeline shows past events, but the right end shows possible future events.\"",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "\"Most of the timeline is about the United States, but the right end is about the whole world.\"",
                          "foil2": "\"The solid part of the timeline represents only a few decades, whereas the dashed part represents several centuries.\"",
                          "foil3": "The time line is solid to show high polio rates and dashed to show low polio rates."
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 80
                }
              ],
              "override": {
                "passageText": [
                  "\"Polio is largely under control today, but it was one of the most frightening diseases of the past century. The symptoms of polio are wildly variable. Most people have no symptoms. Others just have flu-like symptoms. However, in some people, polio attacks the spinal cord. This causes paralysis, often in the legs. Many polio victims must use a wheelchair for the rest of their lives.\"",
                  "\"Polio has been around for a long time, but it first appeared in the United States in 1894. The disease spread quickly, especially among children. Over the next few decades, the United States had many polio epidemics. The epidemics affected thousands of people and caused widespread panic.\"",
                  "\"At first, doctors did not understand what caused polio. Yet they had many theories and tried many treatments. Some blamed overheating, while others blamed catching a chill. Some doctors insisted on bed rest, while others put casts on patients' legs. In the 1920s, a medicine was made from the blood of recovered polio victims. Sadly, none of these treatments were effective.\"",
                  "\"Some treatments did help to relieve the symptoms of polio. In 1940, an Australian nurse known as Sister Kenny came to the U.S. with a treatment to reduce paralysis. Her approach, which included moist hot packs and stretching, is still used today.\"",
                  "\"Franklin Delano Roosevelt, our 32nd president, had paralyzed legs due to polio. In 1926, he opened a treatment center in Warm Springs, Georgia. He had found it helpful to swim in the warm pools there.\"",
                  "\"In 1932, president Franklin Delano Roosevelt took office. This brought more attention and energy to the field of polio research. Scientists had already discovered that polio was caused by a virus. Now the question was, could they develop a vaccine that would protect people from it?\"",
                  "\"When you are exposed to a virus, your immune system produces antibodies to kill it. Then, if that virus comes along again, you can fight it off. The problem is that an effective vaccine must trigger antibody production, without giving you the disease.\"",
                  "\"Several scientists attempted to develop polio vaccines. In 1935, two vaccines using live poliovirus were tested, but both failed. The problem wouldn't be solved until the early 1950s, when a medical researcher named Jonas Salk took a different approach. His vaccine used a killed form of the poliovirus.\"",
                  "\"In 1954, a large-scale test proved that Salk's vaccine was effective. News of Salk's success was met with great fanfare. All over the country people celebrated�even ringing church bells and sounding the sirens of fire engines.\"",
                  "\"In 1955, doctors began a nationwide immunization program. The U.S. had 35,000 cases of polio in 1953. However, by 1957, that number had dropped to 6,000 cases.\"",
                  "\"Today, polio is under control in many countries. The World Health Organization (WHO) is running vaccine programs in countries still affected by polio, and hopes to completely stamp out the disease by 2008.\""
                ]
              }
            },
            {
              "id": "B_2_5_5",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_5_5_1",
                  "type": "COWNSStage1",
                  "children": [{
                      "id": "B_2_5_5_1_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_5_1_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "5_5",
                          "trialId": "55101",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "Which of the following is a true statement?",
                          "answer": "\"While you sleep, your brain is busy reorganizing information.\"",
                          "intervention": "",
                          "foil1": "\"While you sleep, your brain continues to take in new information.\"",
                          "foil2": "\"While you sleep, your brain is completely inactive.\"",
                          "foil3": "\"While you sleep, your brain is relaxed while your muscles are tense.\"",
                          "pages": [
                            "\"You may have noticed that when you don't get enough sleep your body and mind don't work as well as they normally do. The more we skimp on sleep the more accidents we have and the more slowly our bodies and brains function. Obviously, sleep is important. But why is such a boring activity so necessary?\"",
                            "\"When you sleep your brain completely turns itself off from the outside world. It doesn't take in any new information and spends some quality time on getting reorganized. Your brain is very busy in the night, combining different bits of information that you've learned throughout the day. It throws away useless information and strengthens links to useful information. Basically, the brain does its housekeeping. \""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_5_1_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_5_1_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "5_5",
                          "trialId": "55102",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "Waking up from which stage of sleep will make you feel disoriented?",
                          "answer": "stage 4",
                          "intervention": "",
                          "foil1": "stage 1",
                          "foil2": "stage 2",
                          "foil3": "stage 3",
                          "pages": [
                            "\"As you sleep, your brain continually cycles through two kinds of sleep called non-rapid eye movement (non-REM) sleep and rapid eye movement (REM) sleep.\"",
                            "\"The first stage of non-REM sleep starts out when you begin feeling drowsy. The second stage is light sleeping. The third stage is a deep sleep. It's much harder to wake up from this stage. The fourth stage is the deepest sleep of all. If someone wakes you up at this stage, you will probably feel a little disoriented for a few minutes. After stage four, you shift back into stage three, then stage two, and then you enter REM sleep.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_5_1_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_5_1_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "5_5",
                          "trialId": "55103",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "How did REM sleep get its name?",
                          "answer": "REM stands for Rapid Eye Movement because your eyes move rapidly from side to side during this stage of the sleep cycle.",
                          "intervention": "",
                          "foil1": "\"REM stands for Repair, Encoding, and Memory because these are the tasks your brain works on during this stage of the sleep cycle.\"",
                          "foil2": "REM stands for Responsive Ear Moment because your hearing is much more sensitive during this stage of the sleep cycle.",
                          "foil3": "\"REM stands for Reading, English, and Math because these are the subjects that your brain is reviewing during this stage of the sleep cycle.\"",
                          "pages": [
                            "\"During REM sleep your muscles are completely relaxed, but for your brain this is the most active stage. REM sleep got its name from the fact that your eyes move rapidly from side to side when you're in this stage. If someone wakes you right before you reach REM sleep, you will feel as though you are exhausted even if you've slept a lot. But if someone wakes you right after the REM stage you may be able to recall your dreams as though they just happened.\"",
                            "\"After spending a few minutes in REM sleep, your brain shifts back to stage two of non-REM sleep. It shifts from stage two to stage three, then back again, returning to REM sleep a little later. This cycle will repeat about five times if you sleep for eight hours. When you wake up in the morning you should feel great and ready to start a new day. \""
                          ]
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_5_5_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_5_5_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_5_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "5_5",
                          "trialId": "55201",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "the stages of sleep",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "the process of waking",
                          "foil2": "dream interpretation",
                          "foil3": "the dreaming brain",
                          "graphicName": "25-Sleep"
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_5_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_5_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "5_5",
                          "trialId": "55202",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "stage 1: drowsy",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "stage 1: light sleep",
                          "foil2": "stage 3: deep sleep",
                          "foil3": "stage 3: drowsy",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_5_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_5_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "5_5",
                          "trialId": "55203",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "stage 4: deepest sleep",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "stage 4: deep sleep",
                          "foil2": "REM",
                          "foil3": "dream recall",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_5_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_5_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "5_5",
                          "trialId": "55204",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "stage 2: light sleep",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "stage 4: deepest sleep",
                          "foil2": "stage 5: pre-REM",
                          "foil3": "stage 1: drowsy",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_5_2_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_5_2_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "5_5",
                          "trialId": "55205",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "REM: rapid eye movement",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "awake",
                          "foil2": "exhausted when woken",
                          "foil3": "stage 1: drowsy",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_5_2_6",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_5_2_6_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "6",
                          "passageId": "5_5",
                          "trialId": "55206",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "Non-REM",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "REM",
                          "foil2": "deep sleep",
                          "foil3": "dream stage",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_5_2_7",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_5_2_7_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "7",
                          "passageId": "5_5",
                          "trialId": "55207",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "repeats 5 times over 8 hours of sleep",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "3 stages repeated over 10 times a night",
                          "foil2": "if wakened here you will recall your dreams",
                          "foil3": "if wakened here you feel exhausted",
                          "graphicName": ""
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_5_5_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_5_5_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_5_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "5_5",
                          "trialId": "55301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "25-Sleep",
                          "question": "\"According to the flowchart, which of the following is a possible sequence of sleep stages?\"",
                          "answer": "\"awake, stage 1, stage 2, stage 3, stage 4, stage 3, stage 2, REM, stage 2, stage 3\"",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "\"stage 1, stage 2, stage 3, stage 4, REM, stage 1, stage 2, stage 3, stage 4, awake\"",
                          "foil2": "\"stage 4, stage 3, stage 2, stage 1, REM, stage 1, stage 2, stage 3, stage 4, awake\"",
                          "foil3": "\"awake, stage 4, stage 3, stage 2, stage 1, REM, stage 3, stage 2, stage 1, awake\""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_5_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_5_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "5_5",
                          "trialId": "55302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"What is \"\"non-REM\"\"?\"",
                          "answer": "\"Sleep stages 1 through 4 are called the \"\"non-REM\"\" stages  because these are not stages when rapid eye movement occurs.\"",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "\"\"\"Non-REM\"\" has the same meaning as \"\"non-sleeping.\"\" A person who is in the \"\"non-REM\"\" stage is awake.\"",
                          "foil2": "\"Stage 1 is the \"\"non-REM\"\" sleep stage, which is the one time when a sleeper's eyes don't move around.\"",
                          "foil3": "\"\"\"Non-REM\"\" stands for \"\"Non-Recall Enabled Memory\"\" because this term is used to describe stages in which dreams will not be remembered.\""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_5_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_5_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "5_5",
                          "trialId": "55303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"According to the flowchart, which of the following is true?\"",
                          "answer": "\"When a person gets eight hours of sleep, they will have completed five full sleep cycles.\"",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "A person must sleep through five full sleep cycles in order to shift into REM sleep.",
                          "foil2": "A person must be sure to sleep through stage 4 in order to feel refreshed in the morning.",
                          "foil3": "A person must spend at least half of the night in REM sleep in order to reach the deepest level of sleep."
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_5_3_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_5_3_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "5_5",
                          "trialId": "55304",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Why does the flowchart show only one sleep cycle?",
                          "answer": "\"The flowchart uses arrows to show how stages repeat across several cycles, making it clear that each cycle goes through the same stages.\"",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "\"The flowchart is showing that we don't need to sleep through more than one sleep cycle, additional cycles only occur when you oversleep.\"",
                          "foil2": "The flowchart is showing only the most important stages of the sleep cycle.",
                          "foil3": "\"The flowchart only shows what happens during an hour-long nap, because showing a whole night's sleep would make the chart too long.\""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_5_3_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_5_3_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "5_5",
                          "trialId": "55305",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Why is it easier to wake up from REM sleep than it is to wake up from stage 4 sleep?",
                          "answer": "\"Stage 4 sleep is a stage of very deep sleep, while REM is a stage of very light sleep.\"",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "During REM sleep your eyes are moving rapidly from side to side.",
                          "foil2": "The REM stage is part of a cycle of sleep stages that repeats several times during the night.",
                          "foil3": "\"You'll be more likely to recall your dreams if wakened during REM sleep, and stage 4 is a kind of non-REM sleep.\""
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 80
                }
              ],
              "override": {
                "passageText": [
                  "\"You may have noticed that when you don't get enough sleep your body and mind don't work as well as they normally do. The more we skimp on sleep the more accidents we have and the more slowly our bodies and brains function. Obviously, sleep is important. But why is such a boring activity so necessary?\"",
                  "\"When you sleep your brain completely turns itself off from the outside world. It doesn't take in any new information and spends some quality time on getting reorganized. Your brain is very busy in the night, combining different bits of information that you've learned throughout the day. It throws away useless information and strengthens links to useful information. Basically, the brain does its housekeeping. \"",
                  "\"As you sleep, your brain continually cycles through two kinds of sleep called non-rapid eye movement (non-REM) sleep and rapid eye movement (REM) sleep.\"",
                  "\"The first stage of non-REM sleep starts out when you begin feeling drowsy. The second stage is light sleeping. The third stage is a deep sleep. It's much harder to wake up from this stage. The fourth stage is the deepest sleep of all. If someone wakes you up at this stage, you will probably feel a little disoriented for a few minutes. After stage four, you shift back into stage three, then stage two, and then you enter REM sleep.\"",
                  "\"During REM sleep your muscles are completely relaxed, but for your brain this is the most active stage. REM sleep got its name from the fact that your eyes move rapidly from side to side when you're in this stage. If someone wakes you right before you reach REM sleep, you will feel as though you are exhausted even if you've slept a lot. But if someone wakes you right after the REM stage you may be able to recall your dreams as though they just happened.\"",
                  "\"After spending a few minutes in REM sleep, your brain shifts back to stage two of non-REM sleep. It shifts from stage two to stage three, then back again, returning to REM sleep a little later. This cycle will repeat about five times if you sleep for eight hours. When you wake up in the morning you should feel great and ready to start a new day. \""
                ]
              }
            },
            {
              "id": "B_2_5_6",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_5_6_1",
                  "type": "COWNSStage1",
                  "children": [{
                      "id": "B_2_5_6_1_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_6_1_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "5_6",
                          "trialId": "56101",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"According to the passage, why is it necessary to handpick cacao pods rather than using machines?\"",
                          "answer": "Cacao pods must be handpicked because the cacao plants are too delicate for farmers to use machines.",
                          "intervention": "",
                          "foil1": "Cacao pods must be handpicked because fruit-picking machines are not available in South America and Africa.",
                          "foil2": "Cacao pods must be handpicked because a machine cannot tell how to select good pods.",
                          "foil3": "Cacao pods must be handpicked because machines cannot climb the steep hillsides where cacao plants are grown.",
                          "pages": [
                            "Making chocolate is a long and arduous process. The work of many people is needed to transform a lowly seed into the chocolate treats we buy at the store. ",
                            "\"Chocolate comes from cacao plants that are grown in the hot climates of Africa and South America. The plants must mature for four years before they bear their first fruit. When the cacao pods are ripe, farmers must gather them by hand. The cacao plant is too delicate to use machines.\"",
                            "\"The gatherers break each pod with a machete and take out the seeds. These seeds are placed in boxes and covered with banana leaves to ferment for about a week. The fermented seeds are then dried, inspected, and bagged.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_6_1_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_6_1_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "5_6",
                          "trialId": "56102",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "What does chocolate liquor consist of?",
                          "answer": "Chocolate liquor is made up of cocoa butter and cocoa solids.",
                          "intervention": "",
                          "foil1": "\"Chocolate liquor has a thick, gummy consistency.\"",
                          "foil2": "Chocolate liquor includes a blend of white chocolate and dark chocolate.",
                          "foil3": "Chocolate liquor is used as an ingredient in baking.",
                          "pages": [
                            "\"The fermented and dried cacao seeds are sold to manufacturers, who will make them into chocolate.\"",
                            "\"When manufacturers get the seeds, the first thing they do is sort, clean, and weigh them. The cacao seeds are then roasted to bring out their full flavor. The roasted seeds are shelled and milled into a thick chocolate paste, which is called chocolate liquor. This paste consists of one half cocoa butter and one half cocoa solids.\"",
                            "\"A huge press is used to separate the liquor into butter and solids. The cocoa solids are milled into cocoa powder, which is often used as an ingredient in baking. The cocoa butter may be used to make white chocolate, or as an ingredient in cosmetics. \""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_6_1_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_6_1_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "5_6",
                          "trialId": "56103",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "What is tempering?",
                          "answer": "Tempering is the process of repeatedly heating and cooling refined chocolate.",
                          "intervention": "",
                          "foil1": "Tempering means interfering with the chocolate-making process.",
                          "foil2": "\"tempering is the process of mixing chocolate liquor with other ingredients to make \"\"crumb.\"\"\"",
                          "foil3": "Tempering is the process of squirting chocolate into molds and making candy bars.",
                          "pages": [
                            "\"Unpressed chocolate liquor may be mixed with milk, sugar, and cocoa butter to make a crumbly, brown mixture called crumb. The crumb is passed through rollers until it's a smooth paste. This paste is poured into a vat where it is kneaded and blended to improve the flavor. This process, known as conching, takes up to six days to complete. \"",
                            "\"This next step is a process known as tempering. The refined chocolate is cooled and heated repeatedly to improve its texture. Some of the tempered chocolate is sent to other manufacturers for use in foods like ice cream and cookies. Tempered chocolate may also be squirted into molds that shape it into candy bars. Finally, these are wrapped, packaged, and sent to stores near you!\""
                          ]
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_5_6_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_5_6_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_6_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "5_6",
                          "trialId": "56201",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "pick cacao pods & remove seeds",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "pick cacao pods & spread in sun",
                          "foil2": "cut down cacao plants with machetes",
                          "foil3": "cut down cacao plants with machines",
                          "graphicName": "26-Chocolate"
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_6_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_6_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "5_6",
                          "trialId": "56202",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "ferment and dry seeds",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "ship seeds to manufacturers",
                          "foil2": "white chocolate",
                          "foil3": "separate liquor from seeds",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_6_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_6_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "5_6",
                          "trialId": "56203",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "roast seeds",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "baking",
                          "foil2": "cookies",
                          "foil3": "handpick seeds",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_6_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_6_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "5_6",
                          "trialId": "56204",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "shell seeds",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "press seeds",
                          "foil2": "plant seeds",
                          "foil3": "heat & cool seeds",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_6_2_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_6_2_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "5_6",
                          "trialId": "56205",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "mill seeds into liquor",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "grind seeds to make cocoa powder",
                          "foil2": "press seeds to get cocoa butter",
                          "foil3": "sort seeds by size",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_6_2_6",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_6_2_6_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "6",
                          "passageId": "5_6",
                          "trialId": "56206",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "crumb",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "crud",
                          "foil2": "crust",
                          "foil3": "crush",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_6_2_7",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_6_2_7_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "7",
                          "passageId": "5_6",
                          "trialId": "56207",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "conche (blend & knead)",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "conche (pour into shell)",
                          "foil2": "conche (put through rollers)",
                          "foil3": "conche (roast for 6 days)",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_6_2_8",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_6_2_8_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "8",
                          "passageId": "5_6",
                          "trialId": "56208",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "mold & package",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "mail & ship",
                          "foil2": "add fruit and nuts",
                          "foil3": "wrap in colored foil",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_6_2_9",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_6_2_9_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "9",
                          "passageId": "5_6",
                          "trialId": "56209",
                          "stageType": "Strategy",
                          "taskType": "BuildFlow",
                          "questionType": "",
                          "stage": 2,
                          "question": "",
                          "answer": "milk chocolate",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "stir & mix for six days",
                          "foil2": "wrap in colored foil",
                          "foil3": "cocoa powder",
                          "graphicName": ""
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_5_6_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_5_6_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_6_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "5_6",
                          "trialId": "56301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "26-Chocolate",
                          "question": "Which of the following steps are in the right order?",
                          "answer": "\"Ferment seeds, roast seeds, mill seeds into liquor, separate into cocoa butter and cocoa solids.\"",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "\"Shell seeds, ferment seeds, roast seeds, mill seeds into liquor, temper crumb.\"",
                          "foil2": "\"Roast seeds, shell seeds, mill seeds into liquor, make crumb, separate into cocoa butter and cocoa solids.\"",
                          "foil3": "\"Roast seeds, mill seeds into liquor, make crumb, mold & package, temper, conche.\""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_6_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_6_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "5_6",
                          "trialId": "56302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"What is \"\"conching\"\"?\"",
                          "answer": "Conching is a step in the process of making milk chocolate that involves kneading and blending.",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "Conching is the process of separating cocoa butter from cocoa solids.",
                          "foil2": "Conching is the process of handpicking ripe cacao pods and breaking them open with a machete.",
                          "foil3": "\"conching is a step in the process of making white chocolate that involves extracting cocoa butter from \"\"crumb.\"\"\""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_6_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_6_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "5_6",
                          "trialId": "56303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Is it necessary to separate chocolate liquor into cocoa butter and cocoa solids when making white chocolate?",
                          "answer": "\"Yes, because only the cocoa butter is used in white chocolate.\"",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "\"Yes, because only the cocoa solids are used in white chocolate.\"",
                          "foil2": "\"No, because white chocolate is a blend of cocoa butter and cocoa solids.\"",
                          "foil3": "\"No, because white chocolate does not actually contain chocolate.\""
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_6_3_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_6_3_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "5_6",
                          "trialId": "56304",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Many of the same steps go into making milk chocolate and making white chocolate. Which of these steps is NOT common to both?",
                          "answer": "blending and kneading",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "making chocolate liquor",
                          "foil2": "drying and fermenting seeds",
                          "foil3": "roasting"
                        }
                      }]
                    },
                    {
                      "id": "B_2_5_6_3_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_5_6_3_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "5_6",
                          "trialId": "56305",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "This flowchart shows the processes for manufacturing several final (consumer) products. Which list contains all of these products?",
                          "answer": "\"cocoa powder for baking, cookies with chocolate, cosmetics, ice cream with chocolate, milk chocolate, white chocolate\"",
                          "intervention": "TimelinesFlowcharts",
                          "foil1": "\"cookies with chocolate, ice cream with chocolate, milk chocolate, white chocolate\"",
                          "foil2": "\"cocoa powder for baking, chocolate cookies, cosmetics, chocolate liquor, chocolate ice cream, milk chocolate, white chocolate\"",
                          "foil3": "\"cacao beans, cocoa powder, chocolate cookies, chocolate ice cream, chocolate candy\""
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 80
                }
              ],
              "override": {
                "passageText": [
                  "Making chocolate is a long and arduous process. The work of many people is needed to transform a lowly seed into the chocolate treats we buy at the store. ",
                  "\"Chocolate comes from cacao plants that are grown in the hot climates of Africa and South America. The plants must mature for four years before they bear their first fruit. When the cacao pods are ripe, farmers must gather them by hand. The cacao plant is too delicate to use machines.\"",
                  "\"The gatherers break each pod with a machete and take out the seeds. These seeds are placed in boxes and covered with banana leaves to ferment for about a week. The fermented seeds are then dried, inspected, and bagged.\"",
                  "\"The fermented and dried cacao seeds are sold to manufacturers, who will make them into chocolate.\"",
                  "\"When manufacturers get the seeds, the first thing they do is sort, clean, and weigh them. The cacao seeds are then roasted to bring out their full flavor. The roasted seeds are shelled and milled into a thick chocolate paste, which is called chocolate liquor. This paste consists of one half cocoa butter and one half cocoa solids.\"",
                  "\"A huge press is used to separate the liquor into butter and solids. The cocoa solids are milled into cocoa powder, which is often used as an ingredient in baking. The cocoa butter may be used to make white chocolate, or as an ingredient in cosmetics. \"",
                  "\"Unpressed chocolate liquor may be mixed with milk, sugar, and cocoa butter to make a crumbly, brown mixture called crumb. The crumb is passed through rollers until it's a smooth paste. This paste is poured into a vat where it is kneaded and blended to improve the flavor. This process, known as conching, takes up to six days to complete. \"",
                  "\"This next step is a process known as tempering. The refined chocolate is cooled and heated repeatedly to improve its texture. Some of the tempered chocolate is sent to other manufacturers for use in foods like ice cream and cookies. Tempered chocolate may also be squirted into molds that shape it into candy bars. Finally, these are wrapped, packaged, and sent to stores near you!\""
                ]
              }
            }
          ]
        },
        {
          "id": "B_2_6",
          "type": "COWNSLevel",
          "description": "Level 6 Node",
          "override": {
            "level": 6
          },
          "children": [{
              "id": "B_2_6_1",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_6_1_1",
                  "type": "COWNSStage1",
                  "children": [{
                      "id": "B_2_6_1_1_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_1_1_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "6_1",
                          "trialId": "61101",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "Which of the following happened in the story?",
                          "answer": "A huge snowball was found on the front steps of the school.",
                          "intervention": "",
                          "foil1": "The janitor was working hard to build a giant snowball.",
                          "foil2": "All the children knew who put the huge snowball in front of the school.",
                          "foil3": "\"Due to snow, classes were cancelled for the day.\"",
                          "pages": [
                            "\"The next morning, when the children assembled at school, they saw a strange sight. On the front steps of the building was a great snowball, so large that it almost hid the door from sight. And working at it, trying to cut it away so that the entrance could be used, was the janitor. He was having hard work, it seemed.\"",
                            "\"\"\"Who did it?\"\"\"",
                            "\"\"\"Who put it there?\"\"\"",
                            "\"\"\"Say, it's frozen fast, too!\"\"\"",
                            "\"\"\"Somebody will get into trouble about this.\"\"\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_1_1_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_1_1_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "6_1",
                          "trialId": "61102",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"In the phrase \"\"it's frozen fast,\"\" what is the meaning of \"\"fast\"\"?\"",
                          "answer": "firmly fixed in place",
                          "intervention": "",
                          "foil1": "at a rapid pace",
                          "foil2": "deeply asleep",
                          "foil3": "to give up eating",
                          "pages": [
                            "These were only a few of the things said when the children saw the big snowball on the school steps.",
                            "\"\"\"It's frozen fast all right enough,\"\" said the janitor, grimly. \"\"Whoever put it there poured water over it, and it's frozen so fast that I'll have to chop it away piece by piece. All day it will take me, too, and me with all the paths to clean!\"\"\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_1_1_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_1_1_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "6_1",
                          "trialId": "61103",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "Why did Mr. Tetlow believe several boys were involved in building the snowball?",
                          "answer": "Because it was too big to be the work of one person.",
                          "intervention": "",
                          "foil1": "Because he saw some of the boys building it.",
                          "foil2": "Because he saw the boys looking guiltily at each other.",
                          "foil3": "Because several boys already admitted to it and apologized.",
                          "pages": [
                            "\"When the classes were assembled for the morning exercises, Mr. Tetlow, the school principal, stepped to the edge of the platform, and said:\"",
                            "\"\"\"I presume you have all seen the big snowball on the front steps. Whoever put it there did a very wrong thing. I know several boys must have had a hand in it, for one could not do it alone. I will now give those who did it a chance to confess. If they will admit it, and apologize, I will let the matter drop. If not I will punish them severely. Now are you ready to tell, boys? I may say that I have a clue to at least one boy who had a hand in the trick.\"\"\"",
                            "\"Mr. Tetlow paused. There was silence in the room, and the boys looked one at the other. Who was guilty?\""
                          ]
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_6_1_2",
                  "type": "COWNSStage2",
                  "children": [{
                    "id": "B_2_6_1_2_1",
                    "type": "DNWrapper",
                    "children": [{
                      "id": "B_2_6_1_2_1_D",
                      "type": "DataNode",
                      "data": {
                        "viewID": "com.scilearn.DataStream.NormalMechanic",
                        "item": "1",
                        "passageId": "6_1",
                        "trialId": "61201",
                        "stageType": "Strategy",
                        "taskType": "ChooseSumm",
                        "questionType": "",
                        "stage": 2,
                        "question": "Select the best summary of the passage.",
                        "answer": "\"There is a giant snowball blocking the school's front entrance. The janitor is trying to cut it down, but it's frozen fast. At morning assembly, the school principal says the guilty students should confess, or else he will punish them severely. He hints that he already knows one boy who was involved.\"",
                        "intervention": "Summarizing",
                        "foil1": "\"In the morning, the children come to school and find a giant snowball on the front steps. It is so large it hid the front door from view. In fact, it is so large that it blocks the front door from being opened. No one can get inside. The principal tells them he may already know one of the boys who built it.\"",
                        "foil2": "A large snowball is blocking the front entrance to the school. The janitor explains that whoever built it poured hot water over it so it is frozen solid. Now it will take a long time for the janitor to cut it away so that the front doors can be used. This makes everyone late for the morning assembly.",
                        "foil3": "Someone has built a large snowball right on the front steps of the school. The janitor is mad because now he won't have time to clear the paths. The principal says he will punish the children who were involved. Everyone stands around looking at each other and wondering who did it."
                      }
                    }]
                  }]
                },
                {
                  "id": "B_2_6_1_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_6_1_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_1_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "6_1",
                          "trialId": "61301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"According to the summary, which of the following is NOT true?\"",
                          "answer": "The principal says he will severely punish anyone who confesses.",
                          "intervention": "Summarizing",
                          "foil1": "The children are given a chance to confess at the morning assembly.",
                          "foil2": "The janitor is trying to clear the front entrance.",
                          "foil3": "One of the snowball builders may have already been discovered."
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_1_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_1_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "6_1",
                          "trialId": "61302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "The principal tells the morning assembly that he may already know one of the boys involved in the snowball prank. Why would he say this?",
                          "answer": "He believes students are more likely to confess if they think that they have already been found out.",
                          "intervention": "Summarizing",
                          "foil1": "He wants to show off how clever he is in finding clues to solve the mystery.",
                          "foil2": "He believes that the other students have been upset by this prank and wants to reassure them that he will quickly identify the guilty students.",
                          "foil3": "He wants the entire school to take responsibility for the snowball so that he won't have to punish the one boy he suspects."
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_1_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_1_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "6_1",
                          "trialId": "61303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "What main idea is suggested but not actually stated in the summary?",
                          "answer": "Some students put the giant snowball there as a prank.",
                          "intervention": "Summarizing",
                          "foil1": "The principal will send everyone home since the school's entrance is blocked.",
                          "foil2": "The principal's name is Mr. Tetley.",
                          "foil3": "Students from the rival school across town put the snowball there."
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_1_3_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_1_3_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "6_1",
                          "trialId": "61304",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "The children learn that one of the snowball builders may have already been discovered...",
                          "answer": "at the morning assembly.",
                          "intervention": "Summarizing",
                          "foil1": "after they finally get inside.",
                          "foil2": "\"from the principal, when he makes announcements over the intercom.\"",
                          "foil3": "when they first assemble in front of the building."
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_1_3_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_1_3_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "6_1",
                          "trialId": "61305",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Why does the summary include the fact that the janitor cannot easily cut down the snowball because it is frozen in place?",
                          "answer": "This detail shows what a big problem the snowball is.",
                          "intervention": "Summarizing",
                          "foil1": "\"The janitor is the main character, so everything he does is important.\"",
                          "foil2": "\"Although it is a minor detail, it is part of the passage.\"",
                          "foil3": "This fact explains why the principal had to send all of the students home."
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 80
                }
              ],
              "override": {
                "passageText": [
                  "\"The next morning, when the children assembled at school, they saw a strange sight. On the front steps of the building was a great snowball, so large that it almost hid the door from sight. And working at it, trying to cut it away so that the entrance could be used, was the janitor. He was having hard work, it seemed.\"",
                  "\"\"\"Who did it?\"\"\"",
                  "\"\"\"Who put it there?\"\"\"",
                  "\"\"\"Say, it's frozen fast, too!\"\"\"",
                  "\"\"\"Somebody will get into trouble about this.\"\"\"",
                  "These were only a few of the things said when the children saw the big snowball on the school steps.",
                  "\"\"\"It's frozen fast all right enough,\"\" said the janitor, grimly. \"\"Whoever put it there poured water over it, and it's frozen so fast that I'll have to chop it away piece by piece. All day it will take me, too, and me with all the paths to clean!\"\"\"",
                  "\"When the classes were assembled for the morning exercises, Mr. Tetlow, the school principal, stepped to the edge of the platform, and said:\"",
                  "\"\"\"I presume you have all seen the big snowball on the front steps. Whoever put it there did a very wrong thing. I know several boys must have had a hand in it, for one could not do it alone. I will now give those who did it a chance to confess. If they will admit it, and apologize, I will let the matter drop. If not I will punish them severely. Now are you ready to tell, boys? I may say that I have a clue to at least one boy who had a hand in the trick.\"\"\"",
                  "\"Mr. Tetlow paused. There was silence in the room, and the boys looked one at the other. Who was guilty?\""
                ]
              }
            },
            {
              "id": "B_2_6_2",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_6_2_1",
                  "type": "COWNSStage1",
                  "children": [{
                      "id": "B_2_6_2_1_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_2_1_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "6_2",
                          "trialId": "62101",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "Why were the boys and girls breathing hard?",
                          "answer": "They were all afraid of getting in trouble.",
                          "intervention": "",
                          "foil1": "They had been running around on the lawn.",
                          "foil2": "They had whispered so much they lost their breath.",
                          "foil3": "They were warming up their hands after building the snowball.",
                          "pages": [
                            "\"For what seemed a long time Mr. Tetlow stood looking over the room full of pupils. One could have heard a pin drop, so quiet was it. The hard breathing of the boys and girls could be heard. From over in a corner where Danny Rugg sat, came a sound of whispering.\"",
                            "\"\"\"Quiet!\"\" commanded the principal sharply. \"\"There must be no talking. I will wait one minute more for the guilty ones to acknowledge that they rolled the big snowball on the steps. Then, if they do not speak, I shall have something else to say.\"\"\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_2_1_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_2_1_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "6_2",
                          "trialId": "62102",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"The sentence, \"\"The minute ticked slowly off on the big clock,\"\" means that time seemed to pass slowly because...\"",
                          "answer": "they were in suspense about what would happen next.",
                          "intervention": "",
                          "foil1": "the big clock was old and running slow.",
                          "foil2": "Mr. Tetlow's lecture was boring and predictable.",
                          "foil3": "there wasn't much to do in class that day.",
                          "pages": [
                            "\"The minute ticked slowly off on the big clock. No one spoke. Bert glanced from side to side as he sat in his seat, wondering what would come next. Many others had the same thought.\"",
                            "\"\"\"I see no one wishes to take advantage of my offer,\"\" said Mr. Tetlow slowly. \"\"Very well. You may all go to your classrooms, with the exception of Bert Bobbsey. I wish to see him in my office at once. Do you hear, Bert?\"\"\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_2_1_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_2_1_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "6_2",
                          "trialId": "62103",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "Why did Bert think he was wanted in Mr. Tetlow's office?",
                          "answer": "Mr. Tetlow thought Bert knew something about the snowball.",
                          "intervention": "",
                          "foil1": "Mr. Tetlow knew that Bert was involved in the snowball prank.",
                          "foil2": "Mr. Tetlow was going to punish Bert for throwing snowballs.",
                          "foil3": "Mr. Tetlow never said he wanted to see Bert; Bert just imagined it.",
                          "pages": [
                            "\"There was a gasp of astonishment, and all eyes were turned on Bert. He grew red in the face, and then pale. He could see Nan looking at him curiously, as did other girls. Bert was glad Flossie and Freddie were not in the room, for the kindergarten children did not assemble for morning exercises with the larger boys and girls. Flossie and Freddie might have been frightened at the solemn talk.\"",
                            "For a moment Bert could hardly believe what he had heard. He was wanted in Mr. Tetlow's office! It did not seem possible. And there was but one explanation of it. It must be in connection with the big snowball. And Bert knew he had had no hand in putting it on the school steps."
                          ]
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_6_2_2",
                  "type": "COWNSStage2",
                  "children": [{
                    "id": "B_2_6_2_2_1",
                    "type": "DNWrapper",
                    "children": [{
                      "id": "B_2_6_2_2_1_D",
                      "type": "DataNode",
                      "data": {
                        "viewID": "com.scilearn.DataStream.NormalMechanic",
                        "item": "1",
                        "passageId": "6_2",
                        "trialId": "62201",
                        "stageType": "Strategy",
                        "taskType": "ChooseSumm",
                        "questionType": "",
                        "stage": 2,
                        "question": "Select the best summary of the passage.",
                        "answer": "\"The principal, Mr. Tetlow, waits for someone to confess to building the snowball. No one answers. After several minutes, Mr. Tetlow dismisses the students to their classes and asks Bert to come to his office. Bert didn't do it, and he can't believe Mr. Tetlow is blaming him for the snowball.\"",
                        "intervention": "Summarizing",
                        "foil1": "\"It was so quiet in the school assembly, you could hear a pin drop. The students were very nervous, especially Bert. Nan and the other girls looked at him curiously. Freddie and Flossie weren't there when Bert was summoned to Mr. Tetlow's office.\"",
                        "foil2": "\"Someone has built a giant snowball on the steps of the school and Mr. Tetlow wants to know who did it. Bert knows he didn't do it. It's very dangerous to block the front doors of the school. Even in winter, there could be a fire. Mr. Tetlow is trying to get to the bottom of this. \"",
                        "foil3": "\"Some of the kids are whispering during morning assembly. The principal yells at them to be quiet. There is a serious matter of finding out who built a snowball on the school steps. Mr. Tetlow thinks that Bert is the one who did it. Bert is astonished and his face pales, because he didn't do it. \""
                      }
                    }]
                  }]
                },
                {
                  "id": "B_2_6_2_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_6_2_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_2_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "6_2",
                          "trialId": "62301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "What happens in the story that leads Bert to think Mr. Tetlow blames him for the snowball?",
                          "answer": "Mr. Tetlow asks Bert to come to his office.",
                          "intervention": "Summarizing",
                          "foil1": "Mr. Tetlow remembers that Bert has been in trouble before.",
                          "foil2": "Mr. Tetlow glances at Bert with suspicion in his eyes.",
                          "foil3": "Mr. Tetlow sees Bert with the snowball."
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_2_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_2_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "6_2",
                          "trialId": "62302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Which of the following is not true?",
                          "answer": "Mr. Tetlow is right to blame Bert for the snowball.",
                          "intervention": "Summarizing",
                          "foil1": "Mr. Tetlow tells Bert to come to his office.",
                          "foil2": "The principal waits several minutes for someone to confess.",
                          "foil3": "Mr. Tetlow is the school principal."
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_2_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_2_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "6_2",
                          "trialId": "62303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Why does Mr. Tetlow wait several minutes before dismissing the students?",
                          "answer": "He wants to give the guilty students a chance to confess.",
                          "intervention": "Summarizing",
                          "foil1": "He knows classes don't start for several minutes.",
                          "foil2": "He is looking for Bert in the crowd.",
                          "foil3": "He is thinking about how he will punish the guilty students."
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_2_3_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_2_3_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "6_2",
                          "trialId": "62304",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Which of these happened last?",
                          "answer": "Bert is called to Mr. Tetlow's office.",
                          "intervention": "Summarizing",
                          "foil1": "Mr. Tetlow waits for a confession.",
                          "foil2": "Someone built a huge snowball.",
                          "foil3": "School assembly started."
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_2_3_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_2_3_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "6_2",
                          "trialId": "62305",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Which best describes how Bert felt when he was called to the principle's office?",
                          "answer": "Astonished that the principal thought he was guilty.",
                          "intervention": "Summarizing",
                          "foil1": "Guilty that he had built the snowball.",
                          "foil2": "Angry that he was the only snowball builder who got caught.",
                          "foil3": "Pleased that Nan and the other girls were not there."
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 80
                }
              ],
              "override": {
                "passageText": [
                  "\"For what seemed a long time Mr. Tetlow stood looking over the room full of pupils. One could have heard a pin drop, so quiet was it. The hard breathing of the boys and girls could be heard. From over in a corner where Danny Rugg sat, came a sound of whispering.\"",
                  "\"\"\"Quiet!\"\" commanded the principal sharply. \"\"There must be no talking. I will wait one minute more for the guilty ones to acknowledge that they rolled the big snowball on the steps. Then, if they do not speak, I shall have something else to say.\"\"\"",
                  "\"The minute ticked slowly off on the big clock. No one spoke. Bert glanced from side to side as he sat in his seat, wondering what would come next. Many others had the same thought.\"",
                  "\"\"\"I see no one wishes to take advantage of my offer,\"\" said Mr. Tetlow slowly. \"\"Very well. You may all go to your classrooms, with the exception of Bert Bobbsey. I wish to see him in my office at once. Do you hear, Bert?\"\"\"",
                  "\"There was a gasp of astonishment, and all eyes were turned on Bert. He grew red in the face, and then pale. He could see Nan looking at him curiously, as did other girls. Bert was glad Flossie and Freddie were not in the room, for the kindergarten children did not assemble for morning exercises with the larger boys and girls. Flossie and Freddie might have been frightened at the solemn talk.\"",
                  "For a moment Bert could hardly believe what he had heard. He was wanted in Mr. Tetlow's office! It did not seem possible. And there was but one explanation of it. It must be in connection with the big snowball. And Bert knew he had had no hand in putting it on the school steps."
                ]
              }
            },
            {
              "id": "B_2_6_3",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_6_3_1",
                  "type": "COWNSStage1",
                  "children": [{
                      "id": "B_2_6_3_1_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_3_1_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "6_3",
                          "trialId": "63101",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "Which of these things happened in the story?",
                          "answer": "Pollyanna asked the neighbors if they owned the kitten.",
                          "intervention": "",
                          "foil1": "Nancy was surprised by the changes since Pollyanna's arrival.",
                          "foil2": "Pollyanna found the kitten in the neighbor's tree.",
                          "foil3": "The kitten was mewing happily when Pollyanna found it.",
                          "pages": [
                            "\"August came. August brought several surprises and some changes�none of which, however, were really a surprise to Nancy. Nancy, since Pollyanna's arrival, had come to look for surprises and changes.\"",
                            "First there was the kitten.",
                            "\"Pollyanna found the kitten mewing pitifully some distance down the road. When systematic questioning of the neighbors failed to find any one who claimed it, Pollyanna brought it home at once, as a matter of course.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_3_1_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_3_1_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "6_3",
                          "trialId": "63102",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "Why is Pollyanna happy she couldn't find the kitten's owner?",
                          "answer": "She wanted to keep the kitten for herself.",
                          "intervention": "",
                          "foil1": "She plans to give it to her friend across the street.",
                          "foil2": "She knew Miss Polly loved kittens.",
                          "foil3": "She thought the owner was not taking good care of the kitten.",
                          "pages": [
                            "\"\"\"And I was glad I didn't find any one who owned it, too,\"\" she told her aunt in happy confidence, \"\" 'cause I wanted to bring it home all the time. I love kitties. I knew you'd be glad to let it live here.\"\"\"",
                            "\"Miss Polly looked at the forlorn little gray bunch of neglected misery in Pollyanna's arms, and shivered: Miss Polly did not care for cats�not even pretty, healthy, clean ones.\"",
                            "\"\"\"Ugh! Pollyanna! What a dirty little beast! And it's sick, I'm sure, and all mangy and fleay.\"\"\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_3_1_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_3_1_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "6_3",
                          "trialId": "63103",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"What does the saying \"\"in vain\"\" mean, as it is used in this story?\"",
                          "answer": "unsuccessfully",
                          "intervention": "",
                          "foil1": "with conceit",
                          "foil2": "in a blood vessel",
                          "foil3": "in anger",
                          "pages": [
                            "\"\"\"I know it, poor little thing,\"\" crooned Pollyanna, tenderly, looking into the little creature's frightened eyes. \"\"And it's all trembly, too, it's so scared. You see it doesn't know, yet, that we're going to keep it, of course.\"\"\"",
                            "Miss Polly opened her lips and tried to speak; but in vain. The curious helpless feeling that had been hers so often since Pollyanna's arrival had her now fast in its grip."
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_3_1_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_3_1_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "6_3",
                          "trialId": "63104",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"When Pollyanna brought home the small, ragged boy, Miss Polly probably said...\"",
                          "answer": "that the boy could not stay.",
                          "intervention": "",
                          "foil1": "that she was powerless to remonstrate.",
                          "foil2": "that the boy could not keep the kitten.",
                          "foil3": "that Pollyanna should take better care of her pets.",
                          "pages": [
                            "\" \"\"But, Pollyanna, Pollyanna,\"\" remonstrated Miss Polly. \"\"I don't�\"\" But Pollyanna was already halfway to the kitchen, calling:\"",
                            "\"\"\"Nancy, Nancy, just see this dear little kitty that Aunt Polly is going to bring up along with me!\"\" And Aunt Polly, in the sitting room�who abhorred cats�fell back in her chair with a gasp of dismay, powerless to remonstrate.\"",
                            "\"When, in less than a week, however, Pollyanna brought home a small, ragged boy, and confidently claimed the same protection for him, Miss Polly did have something to say.\""
                          ]
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_6_3_2",
                  "type": "COWNSStage2",
                  "children": [{
                    "id": "B_2_6_3_2_1",
                    "type": "DNWrapper",
                    "children": [{
                      "id": "B_2_6_3_2_1_D",
                      "type": "DataNode",
                      "data": {
                        "viewID": "com.scilearn.DataStream.NormalMechanic",
                        "item": "1",
                        "passageId": "6_3",
                        "trialId": "63201",
                        "stageType": "Strategy",
                        "taskType": "ChooseSumm",
                        "questionType": "",
                        "stage": 2,
                        "question": "Select the best summary of the passage.",
                        "answer": "\"Nancy finds life with Pollyanna to be full of surprises�like the time she brought home a lost kitten. While Miss Polly dislikes cats, she can't resist Pollyanna's cheerful determination. Miss Polly does put her foot down, later, when Pollyanna brings home a ragged boy.\"",
                        "intervention": "Summarizing",
                        "foil1": "\"Pollyanna is a very demanding person and knows that she can talk her Aunt Polly into anything. First she finds a lost kitten and brings it home to live with them, even though Miss Polly says \"\"no.\"\" Miss Polly is also powerless to stop her bringing a ragged boy to live with them.\"",
                        "foil2": "\"Pollyanna finds a lost kitten that is scared and trembling. Pollyanna shows the kitten to her aunt. Then she shows the kitten to Nancy, who says that she is no longer surprised by anything that happens. Pollyanna looks sad and pitiful so she is allowed to keep the kitten.\"",
                        "foil3": "Nancy finds life with Pollyanna to be full of surprises. The first surprise is in August. Pollyanna finds a lost kitten. Miss Polly saw that it had fleas. Miss Polly sits back in her chair in disbelief. Pollyanna brings home a boy. Miss Polly says something."
                      }
                    }]
                  }]
                },
                {
                  "id": "B_2_6_3_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_6_3_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_3_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "6_3",
                          "trialId": "63301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "When did Miss Polly give in?",
                          "answer": "Pollyanna brings home a lost kitten and wants to keep it.",
                          "intervention": "Summarizing",
                          "foil1": "Pollyanna brings a ragged boy home to live with them.",
                          "foil2": "Nancy brings home a lost kitten and wants to keep it.",
                          "foil3": "Nancy brings a ragged boy home to live with them."
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_3_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_3_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "6_3",
                          "trialId": "63302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"Given only the information in the story and summary, what was Pollyanna most likely thinking when she brought the boy home?\"",
                          "answer": "\"Miss Polly let the kitten stay, so she'll probably let the boy stay, too.\"",
                          "intervention": "Summarizing",
                          "foil1": "\"Miss Polly will think that the little boy is her brother, so she won't even notice him.\"",
                          "foil2": "\"Miss Polly loves all kinds of animals and children, so she will keep the boy.\"",
                          "foil3": "\"Miss Polly enjoys having her life be full of surprises, so she will enjoy having a new child.\""
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_3_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_3_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "6_3",
                          "trialId": "63303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Which word best describes Pollyanna's attitude?",
                          "answer": "self-assured",
                          "intervention": "Summarizing",
                          "foil1": "stubborn",
                          "foil2": "lonely",
                          "foil3": "absent-minded"
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_3_3_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_3_3_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "6_3",
                          "trialId": "63304",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"According to the summary, to whom is Miss Polly related?\"",
                          "answer": "The summary doesn't say to whom Miss Polly is related.",
                          "intervention": "Summarizing",
                          "foil1": "The summary says that Miss Polly is Pollyanna's aunt.",
                          "foil2": "The summary says that Miss Polly is Nancy's aunt.",
                          "foil3": "The summary says that Miss Polly is aunt to both Nancy and Pollyanna."
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_3_3_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_3_3_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "6_3",
                          "trialId": "63305",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Why does the summary include the detail that Aunt Polly dislikes cats?",
                          "answer": "\"This detail shows that she often gives in to Pollyanna, even when she really doesn't want to.\"",
                          "intervention": "Summarizing",
                          "foil1": "This fact is included because it shows that Miss Polly is an utterly hard-hearted and rigid person.",
                          "foil2": "This detail is one of the many details added to the summary to make it more lively and colorful.",
                          "foil3": "This fact explains why Miss Polly reacted the way she did toward the ragged boy."
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 80
                }
              ],
              "override": {
                "passageText": [
                  "\"August came. August brought several surprises and some changes�none of which, however, were really a surprise to Nancy. Nancy, since Pollyanna's arrival, had come to look for surprises and changes.\"",
                  "First there was the kitten.",
                  "\"Pollyanna found the kitten mewing pitifully some distance down the road. When systematic questioning of the neighbors failed to find any one who claimed it, Pollyanna brought it home at once, as a matter of course.\"",
                  "\"\"\"And I was glad I didn't find any one who owned it, too,\"\" she told her aunt in happy confidence, \"\" 'cause I wanted to bring it home all the time. I love kitties. I knew you'd be glad to let it live here.\"\"\"",
                  "\"Miss Polly looked at the forlorn little gray bunch of neglected misery in Pollyanna's arms, and shivered: Miss Polly did not care for cats�not even pretty, healthy, clean ones.\"",
                  "\"\"\"Ugh! Pollyanna! What a dirty little beast! And it's sick, I'm sure, and all mangy and fleay.\"\"\"",
                  "\"\"\"I know it, poor little thing,\"\" crooned Pollyanna, tenderly, looking into the little creature's frightened eyes. \"\"And it's all trembly, too, it's so scared. You see it doesn't know, yet, that we're going to keep it, of course.\"\"\"",
                  "Miss Polly opened her lips and tried to speak; but in vain. The curious helpless feeling that had been hers so often since Pollyanna's arrival had her now fast in its grip.",
                  "\" \"\"But, Pollyanna, Pollyanna,\"\" remonstrated Miss Polly. \"\"I don't�\"\" But Pollyanna was already halfway to the kitchen, calling:\"",
                  "\"\"\"Nancy, Nancy, just see this dear little kitty that Aunt Polly is going to bring up along with me!\"\" And Aunt Polly, in the sitting room�who abhorred cats�fell back in her chair with a gasp of dismay, powerless to remonstrate.\"",
                  "\"When, in less than a week, however, Pollyanna brought home a small, ragged boy, and confidently claimed the same protection for him, Miss Polly did have something to say.\""
                ]
              }
            },
            {
              "id": "B_2_6_4",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_6_4_1",
                  "type": "COWNSStage1",
                  "children": [{
                      "id": "B_2_6_4_1_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_4_1_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "6_4",
                          "trialId": "64101",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"What did the narrator mean in saying \"\"he lost no time about it\"\"?\"",
                          "answer": "Squire Gordon started breaking the horse in right away.",
                          "intervention": "",
                          "foil1": "The horse galloped quickly to Squire Gordon.",
                          "foil2": "Squire Gordon examined the horse's teeth for signs of age.",
                          "foil3": "The horse was only four years old when bought by Squire Gordon.",
                          "pages": [
                            "\"When I was four years old, Squire Gordon came to look at me. He examined my eyes, my mouth, and my legs; he felt them all down, and then I had to walk and trot and gallop before him; he seemed to like me, and said, \"\"When he has been well broken in he will do very well.\"\" My master said he would break me in himself, and he lost no time about it, for the next day he began.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_4_1_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_4_1_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "6_4",
                          "trialId": "64102",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"In the phrase, \"\"He must never start at what he sees,\"\" the word start means...\"",
                          "answer": "to move or dart suddenly.",
                          "intervention": "",
                          "foil1": "to set out on a journey.",
                          "foil2": "to begin a performance.",
                          "foil3": "to enter a race.",
                          "pages": [
                            "\"Every one may not know what breaking in is, therefore I will describe it. It means to teach a horse to wear a saddle and bridle, and to carry on his back a man, woman, or child; to go just the way they wish, and to go quietly. Besides this, he has to learn to wear a collar, and a breeching, and to stand still while they are put on; then to have a cart or a buggy fixed behind, so that he cannot walk or trot without dragging it after him; and he must go fast or slow, just as his driver wishes. He must never start at what he sees, nor speak to other horses, nor bite, nor kick, nor have any will of his own, but always do his master's will, even though he may be very tired or hungry; but the worst of all is, when his harness is once on, he may neither jump for joy nor lie down for weariness. So you see this breaking in is a great thing.\""
                          ]
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_6_4_2",
                  "type": "COWNSStage2",
                  "children": [{
                    "id": "B_2_6_4_2_1",
                    "type": "DNWrapper",
                    "children": [{
                      "id": "B_2_6_4_2_1_D",
                      "type": "DataNode",
                      "data": {
                        "viewID": "com.scilearn.DataStream.NormalMechanic",
                        "item": "1",
                        "passageId": "6_4",
                        "trialId": "64201",
                        "stageType": "Strategy",
                        "taskType": "ChooseSumm",
                        "questionType": "",
                        "stage": 2,
                        "question": "Select the best summary of the passage.",
                        "answer": "\"Squire Gordon examines his four-year-old horse. He decides it is time to break in the horse. \"\"Breaking in\"\" a horse means teaching it to carry a passenger quietly, to stand still when being harnessed to a cart, and to follow a driver's commands. A well broken in horse will never misbehave.\"",
                        "intervention": "Summarizing",
                        "foil1": "\"When I was four, Squire Gordon came and examined my eyes, mouth, and legs. He made me walk, trot, and gallop. A broken in horse cannot walk or trot without dragging a cart behind. He said he would break me in himself. Not everyone knows what breaking in is, but it is a great thing.\"",
                        "foil2": "\"Sometimes horses wear and saddle and bridle. Other times they wear a collar and breeching, and then pull a cart or buggy behind them. When he is wearing these things, a horse should not speak to other horses, because he is at work. He may also have to carry a passenger on his back.\"",
                        "foil3": "\"Horses are often broken in when they are about four years old. Squire Gordon owned such a horse. His horse was taught to carry men, women, and children on its back. If it were to bite or kick, it would surely get in trouble. Some horses develop a bad habit of biting their passengers.\""
                      }
                    }]
                  }]
                },
                {
                  "id": "B_2_6_4_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_6_4_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_4_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "6_4",
                          "trialId": "64301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "A horse that has been broken in will...",
                          "answer": "follow a driver's commands.",
                          "intervention": "Summarizing",
                          "foil1": "bite.",
                          "foil2": "always go slowly.",
                          "foil3": "never get tired."
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_4_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_4_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "6_4",
                          "trialId": "64302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "The summary does not mention that a horse must not bite or kick because...",
                          "answer": "\"biting and kicking are details summarized by the word \"\"misbehave.\"\"\"",
                          "intervention": "Summarizing",
                          "foil1": "biting and kicking are only mentioned once in the passage.",
                          "foil2": "a horse may bite and kick if he is not feeling well.",
                          "foil3": "a well broken-in horse would never bite or kick."
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_4_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_4_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "6_4",
                          "trialId": "64303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "How old was the horse that Squire Gordon decided to break in?",
                          "answer": "4 years",
                          "intervention": "Summarizing",
                          "foil1": "4 months",
                          "foil2": "40 days",
                          "foil3": "the next day"
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_4_3_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_4_3_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "6_4",
                          "trialId": "64304",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "In what way does the writing differ between the summary and the original passage?",
                          "answer": "\"The passage is written from the perspective of the horse, whereas the summary is not.\"",
                          "intervention": "Summarizing",
                          "foil1": "\"The passage is written from the perspective of Squire Gordon, whereas the summary is not.\"",
                          "foil2": "\"The summary includes only facts, whereas the passage also gave opinions.\"",
                          "foil3": "\"The summary includes dialog, whereas the passage did not.\""
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_4_3_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_4_3_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "6_4",
                          "trialId": "64305",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Which of the following would be the best title for the passage?",
                          "answer": "When a Horse Is Broken In",
                          "intervention": "Summarizing",
                          "foil1": "Squire Gordon's Story",
                          "foil2": "Pulling Carts Quietly",
                          "foil3": "It's No Big Thing"
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 80
                }
              ],
              "override": {
                "passageText": [
                  "\"When I was four years old, Squire Gordon came to look at me. He examined my eyes, my mouth, and my legs; he felt them all down, and then I had to walk and trot and gallop before him; he seemed to like me, and said, \"\"When he has been well broken in he will do very well.\"\" My master said he would break me in himself, and he lost no time about it, for the next day he began.\"",
                  "\"Every one may not know what breaking in is, therefore I will describe it. It means to teach a horse to wear a saddle and bridle, and to carry on his back a man, woman, or child; to go just the way they wish, and to go quietly. Besides this, he has to learn to wear a collar, and a breeching, and to stand still while they are put on; then to have a cart or a buggy fixed behind, so that he cannot walk or trot without dragging it after him; and he must go fast or slow, just as his driver wishes. He must never start at what he sees, nor speak to other horses, nor bite, nor kick, nor have any will of his own, but always do his master's will, even though he may be very tired or hungry; but the worst of all is, when his harness is once on, he may neither jump for joy nor lie down for weariness. So you see this breaking in is a great thing.\""
                ]
              }
            },
            {
              "id": "B_2_6_5",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_6_5_1",
                  "type": "COWNSStage1",
                  "children": [{
                      "id": "B_2_6_5_1_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_5_1_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "6_5",
                          "trialId": "65101",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "Which fear is mentioned in the passage?",
                          "answer": "fear of storms",
                          "intervention": "",
                          "foil1": "fear of flying",
                          "foil2": "fear of spiders",
                          "foil3": "fear of heights",
                          "pages": [
                            "\"People have many different fears, just like people have many different hobbies. For example, one person might be afraid of storms, but another person might love storms. Some people love storms so much that they try to get close to severe storms on purpose! They are called storm chasers and many travel hundreds or thousands of miles to chase storms every year.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_5_1_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_5_1_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "6_5",
                          "trialId": "65102",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"According to the author, storm chasers decide where to travel, based on information they have gathered from...\"",
                          "answer": "the Internet.",
                          "intervention": "",
                          "foil1": "the radio.",
                          "foil2": "the National Weather Service.",
                          "foil3": "a target area.",
                          "pages": [
                            "\"Most chasers start a day by checking data on the Internet. They look at things like wind direction, temperatures, and information on severe weather warnings. After gathering all possible data, chasers pick a target area to travel to. But, even with all the available information, it is still very difficult to predict severe storms. Often, many hours of driving result in no storm at all.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_5_1_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_5_1_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "6_5",
                          "trialId": "65103",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"In the passage, which is the meaning of the word \"\"top\"\"?\"",
                          "answer": "a toy that can be made to spin",
                          "intervention": "",
                          "foil1": "the highest level of something",
                          "foil2": "the highest intensity of something",
                          "foil3": "something that is used as a cover",
                          "pages": [
                            "\"Tornadoes are a favorite event of storm chasers, but they are very rare. They occur almost everywhere in the world, but the most active site for them is Tornado Alley, which is located in the center of the United States. Typical tornadoes form when warm, moist air rises to meet cold, dry air. As the warm air rises, it can meet different wind directions at different altitudes. If the winds line up a certain way and with enough strength, they spin the air like a top. This results in a rotating column of air that extends from the clouds to the ground.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_5_1_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_5_1_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "6_5",
                          "trialId": "65104",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"According to the passage, which describes why a partner is important for storm chasers?\"",
                          "answer": "They need to keep up with the latest information.",
                          "intervention": "",
                          "foil1": "They can work together to move things off the road.",
                          "foil2": "It is nice to be social while driving long distances.",
                          "foil3": "The partner is responsible for taking pictures and writing notes.",
                          "pages": [
                            "\"Tornadoes range in strength. Some might only damage tree branches or street signs. Others can throw entire cars, lift and destroy houses, and uproot whole trees. Due to the dangerous effects of storms, storm chasers need to be very observant. They usually travel with a partner who helps navigate and monitors the latest information. Given the danger involved, you can imagine how selective storm chasers are about their partners!\""
                          ]
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_6_5_2",
                  "type": "COWNSStage2",
                  "children": [{
                    "id": "B_2_6_5_2_1",
                    "type": "DNWrapper",
                    "children": [{
                      "id": "B_2_6_5_2_1_D",
                      "type": "DataNode",
                      "data": {
                        "viewID": "com.scilearn.DataStream.NormalMechanic",
                        "item": "1",
                        "passageId": "6_5",
                        "trialId": "65201",
                        "stageType": "Strategy",
                        "taskType": "ChooseSumm",
                        "questionType": "",
                        "stage": 2,
                        "question": "Select the best summary of the passage.",
                        "answer": "\"Storm chasers like to see severe storms. They will collect weather data, then travel many miles in search of rare storms like tornadoes. Tornadoes are powerful winds that spin like a top and can lift cars off the ground. Severe storms can be dangerous, so storm chasers work with a partner.\"",
                        "intervention": "Summarizing",
                        "foil1": "\"Tornadoes are powerful and can ruin homes. Storm chasers are people who like to watch tornadoes and take pictures of them. It is important to drive carefully and have a partner when chasing a storm. Light, moist air rising to meet cold, dry air, is the source of most tornadoes.\"",
                        "foil2": "\"warm air is lighter than cold air. when warm air rises and meets cold air, it can meet winds coming from different directions. this can cause a spinning column of air that we call a tornado. tornadoes are rare, but the most active site for them is tornado alley in the united states. \"",
                        "foil3": "\"Many people are scared of storms. People have different fears. Tornadoes are a type of storm that can lift cars and houses, and knock down entire trees. Tornado Alley is well known for having tornadoes. Storm chasers are people who like to watch storms, and collect data about them.\""
                      }
                    }]
                  }]
                },
                {
                  "id": "B_2_6_5_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_6_5_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_5_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "6_5",
                          "trialId": "65301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Which statement is true according to the passage?",
                          "answer": "Storm chasers will go a long way to see a storm.",
                          "intervention": "Summarizing",
                          "foil1": "Storm chasers are usually told where to go.",
                          "foil2": "An experienced storm chaser doesn't need to be careful.",
                          "foil3": "Tornadoes are common all over the United States."
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_5_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_5_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "6_5",
                          "trialId": "65302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Why will storm chasers travel many miles?",
                          "answer": "Severe storms are rare and where they will occur is hard to predict.",
                          "intervention": "Summarizing",
                          "foil1": "Storm chasers like to drive.",
                          "foil2": "Tornadoes travel fast and chasers need to stay close to them.",
                          "foil3": "Severe storms are dangerous and chasers need to stay far away from them to be safe."
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_5_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_5_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "6_5",
                          "trialId": "65303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Why doesn't the summary give the location of Tornado Alley?",
                          "answer": "This fact is not important for understanding the main points of the article.",
                          "intervention": "Summarizing",
                          "foil1": "The article does not say anything about Tornado Alley.",
                          "foil2": "\"As long as you don't live there, the location of Tornado Alley is not important.\"",
                          "foil3": "Because there was not enough space to include all the facts from the article."
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_5_3_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_5_3_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "6_5",
                          "trialId": "65304",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "The author describes tornadoes...",
                          "answer": "to give an example of what storm chasers are interested in.",
                          "intervention": "Summarizing",
                          "foil1": "to clarify the ways in which they differ from hurricanes.",
                          "foil2": "to scare readers away from becoming a storm chaser.",
                          "foil3": "because that is the main topic of the article."
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_5_3_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_5_3_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "6_5",
                          "trialId": "65305",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Which of the following would be the best title for the passage?",
                          "answer": "chasing storms",
                          "intervention": "Summarizing",
                          "foil1": "tornadoes and hurricanes",
                          "foil2": "stormy weather",
                          "foil3": "how to drive as a storm chaser"
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 80
                }
              ],
              "override": {
                "passageText": [
                  "\"People have many different fears, just like people have many different hobbies. For example, one person might be afraid of storms, but another person might love storms. Some people love storms so much that they try to get close to severe storms on purpose! They are called storm chasers and many travel hundreds or thousands of miles to chase storms every year.\"",
                  "\"Most chasers start a day by checking data on the Internet. They look at things like wind direction, temperatures, and information on severe weather warnings. After gathering all possible data, chasers pick a target area to travel to. But, even with all the available information, it is still very difficult to predict severe storms. Often, many hours of driving result in no storm at all.\"",
                  "\"Tornadoes are a favorite event of storm chasers, but they are very rare. They occur almost everywhere in the world, but the most active site for them is Tornado Alley, which is located in the center of the United States. Typical tornadoes form when warm, moist air rises to meet cold, dry air. As the warm air rises, it can meet different wind directions at different altitudes. If the winds line up a certain way and with enough strength, they spin the air like a top. This results in a rotating column of air that extends from the clouds to the ground.\"",
                  "\"Tornadoes range in strength. Some might only damage tree branches or street signs. Others can throw entire cars, lift and destroy houses, and uproot whole trees. Due to the dangerous effects of storms, storm chasers need to be very observant. They usually travel with a partner who helps navigate and monitors the latest information. Given the danger involved, you can imagine how selective storm chasers are about their partners!\""
                ]
              }
            },
            {
              "id": "B_2_6_6",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_6_6_1",
                  "type": "COWNSStage1",
                  "children": [{
                      "id": "B_2_6_6_1_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_6_1_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "6_6",
                          "trialId": "66101",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"According to the passage, what do noise, speech, and music all have in common?\"",
                          "answer": "All are made from vibrations.",
                          "intervention": "",
                          "foil1": "All can be detected by the human ear.",
                          "foil2": "All can be recorded.",
                          "foil3": "All happen in organized patterns.",
                          "pages": [
                            "\"Sound is all around us, usually in the form of noise, speech, or music. These different kinds of sound come to us by way of vibrations traveling through the air. How the vibrations are organized determines the quality of a sound. Noise is usually very disorganized, whereas musical sounds happen in organized patterns. People seem to be fascinated by organized patterns of sound, as we have been making music for thousands of years. Perhaps early societies first created music by trying to imitate bird songs or other musical sounds they heard around them.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_6_1_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_6_1_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "6_6",
                          "trialId": "66102",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "What two suggestions did the author give of ways to play the rubber band?",
                          "answer": "Pluck softly to create a slight vibration and pluck harder to create a strong vibration.",
                          "intervention": "",
                          "foil1": "Pluck softly to create a strong vibration and pluck harder to create a slight vibration.",
                          "foil2": "stretch slightly to create a slow vibration and stretch strongly to create a fast vibration",
                          "foil3": "stretch slightly to create a fast vibration and stretch strongly to create a slow vibration",
                          "pages": [
                            "\"You can easily create music, even without fancy musical instruments. For example, you can make a simple instrument from a rubber band. Just wrap the rubber band around your fingers, stretch it a little, and pluck it. If you pluck softly, it will vibrate slightly and create a soft sound. If you pluck harder, it will vibrate more strongly and create a louder sound. You can create a variety of sounds just by plucking and stretching the rubber band in different ways.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_6_1_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_6_1_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "6_6",
                          "trialId": "66103",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"According to the passage, how is a viola different from a harp?\"",
                          "answer": "\"Musicians usually pluck or tap harp strings, but they use a bow to scrape viola strings.\"",
                          "intervention": "",
                          "foil1": "\"The harp is a very old instrument, while the viola was invented recently.\"",
                          "foil2": "The viola is slightly bigger than the largest harp.",
                          "foil3": "Musicians use the harp only for solo performances and use the viola only for symphony performances.",
                          "pages": [
                            "\"Like your stretched rubber band, instruments in the string family produce sounds when their strings are set into vibrations. Depending on the instrument, musicians will use different methods to get the strings vibrating. Some string instruments, such as the harp and guitar, are played by plucking or tapping their strings. Other string instruments, such as the violin, viola, cello, and double bass, are usually played with a bow, which is scraped across their strings. These last four string instruments make up the string section of a symphony orchestra.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_6_1_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_6_1_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "6_6",
                          "trialId": "66104",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"According to the passage, the word \"\"symphony\"\" comes from the combination of two Greek words...\"",
                          "answer": "\"{sym,} which means \"\"together,\"\" and {phonos,} which means \"\"sound.\"\"\"",
                          "intervention": "",
                          "foil1": "\"{sym,} which means \"\"together,\"\" and {phonis,} which means \"\"artful.\"\"\"",
                          "foil2": "\"{sym,} which means \"\"beautiful,\"\" and {phone,} which means \"\"sound.\"\"\"",
                          "foil3": "\"{sym,} which means \"\"beautiful,\"\" and {phony,} which means \"\"artful.\"\"\"",
                          "pages": [
                            "\"A symphony, or symphony orchestra, is made up of a group of musicians who play together using a specific combination of instruments. Actually, the word \"\"symphony\"\" comes from the combination of two Greek words, {sym,} which means \"\"together,\"\" and {phonos}, which means \"\"sound.\"\" The string instruments are a key part of the symphony orchestra because they make up more than half of its instruments. The other three families of the symphony orchestra are the woodwind family, the brass family, and the percussion family.\""
                          ]
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_6_6_2",
                  "type": "COWNSStage2",
                  "children": [{
                    "id": "B_2_6_6_2_1",
                    "type": "DNWrapper",
                    "children": [{
                      "id": "B_2_6_6_2_1_D",
                      "type": "DataNode",
                      "data": {
                        "viewID": "com.scilearn.DataStream.NormalMechanic",
                        "item": "1",
                        "passageId": "6_6",
                        "trialId": "66201",
                        "stageType": "Strategy",
                        "taskType": "ChooseSumm",
                        "questionType": "",
                        "stage": 2,
                        "question": "Select the best summary of the passage.",
                        "answer": "\"Some instruments have strings that vibrate to make musical sounds. Musicians play string instruments by plucking, tapping, or scraping a bow across the strings. The string section�violin, viola, cello, and double bass�makes up a major part of any symphony orchestra.\"",
                        "intervention": "Summarizing",
                        "foil1": "\"All music is created from vibrations that travel through the air. Birds make music when they sing. There are four string instruments in the symphony orchestra: the violin, viola, cello, and double bass. Musicians make music on these instruments by using a bow.\"",
                        "foil2": "\"The symphony orchestra has many different types of instruments. They all make music by creating vibrations that travel through the air. There are a total of four families of instruments in the symphony orchestra. The string family, which includes the violin, is the largest family among them.\"",
                        "foil3": "\"You can create music by plucking a rubber band. Pay attention to the difference when you pluck it lightly and when you pluck it harder. When you pluck it harder, the rubber band vibrates a lot. String instruments, like the guitar, violin, and double bass, also vibrate to make music.\""
                      }
                    }]
                  }]
                },
                {
                  "id": "B_2_6_6_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_6_6_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_6_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "6_6",
                          "trialId": "66301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"According to the summary, what is the biggest group of instruments in a symphony orchestra?\"",
                          "answer": "the string section",
                          "intervention": "Summarizing",
                          "foil1": "the piano section",
                          "foil2": "the violin section",
                          "foil3": "the percussion section"
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_6_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_6_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "6_6",
                          "trialId": "66302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"According to the summary, how do string instruments make sounds?\"",
                          "answer": "their strings vibrate when played",
                          "intervention": "Summarizing",
                          "foil1": "their strings tap against their wooden bodies",
                          "foil2": "their strings scrape against each other when played",
                          "foil3": "their strings trigger sound sources in their wooden bodies"
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_6_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_6_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "6_6",
                          "trialId": "66303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"What is the meaning of the word \"\"bow\"\" as used in the passage?\"",
                          "answer": "a rod with horsehair stretched along it for playing some instruments",
                          "intervention": "Summarizing",
                          "foil1": "a kind of knot with two loops and two loose ends",
                          "foil2": "to thank an audience for their applause by bending at the waist or neck",
                          "foil3": "a bent piece of wood with a cord stretched between its ends for shooting arrows"
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_6_3_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_6_3_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "6_6",
                          "trialId": "66304",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "This passage is about...",
                          "answer": "how string instruments work and how they are used.",
                          "intervention": "Summarizing",
                          "foil1": "the many instruments of the symphony orchestra and how they differ.",
                          "foil2": "the many instruments of the string family and how they differ.",
                          "foil3": "\"how different vibrations are created, travel through the air, and strike the ear.\""
                        }
                      }]
                    },
                    {
                      "id": "B_2_6_6_3_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_6_6_3_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "6_6",
                          "trialId": "66305",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "What additional fact from the passage would be the most relevant addition to this summary?",
                          "answer": "A variety of sounds can be created by stretching and striking a string in different ways.",
                          "intervention": "Summarizing",
                          "foil1": "\"The word \"\"symphony\"\" comes from the combination of two Greek words, {sym} (together), and {phonos} (sound).\"",
                          "foil2": "Early societies may have imitated bird songs or other musical sounds they heard around them.",
                          "foil3": "\"You can make a simple instrument out of a washtub, a broom handle, and a piece of string.\""
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 80
                }
              ],
              "override": {
                "passageText": [
                  "\"Sound is all around us, usually in the form of noise, speech, or music. These different kinds of sound come to us by way of vibrations traveling through the air. How the vibrations are organized determines the quality of a sound. Noise is usually very disorganized, whereas musical sounds happen in organized patterns. People seem to be fascinated by organized patterns of sound, as we have been making music for thousands of years. Perhaps early societies first created music by trying to imitate bird songs or other musical sounds they heard around them.\"",
                  "\"You can easily create music, even without fancy musical instruments. For example, you can make a simple instrument from a rubber band. Just wrap the rubber band around your fingers, stretch it a little, and pluck it. If you pluck softly, it will vibrate slightly and create a soft sound. If you pluck harder, it will vibrate more strongly and create a louder sound. You can create a variety of sounds just by plucking and stretching the rubber band in different ways.\"",
                  "\"Like your stretched rubber band, instruments in the string family produce sounds when their strings are set into vibrations. Depending on the instrument, musicians will use different methods to get the strings vibrating. Some string instruments, such as the harp and guitar, are played by plucking or tapping their strings. Other string instruments, such as the violin, viola, cello, and double bass, are usually played with a bow, which is scraped across their strings. These last four string instruments make up the string section of a symphony orchestra.\"",
                  "\"A symphony, or symphony orchestra, is made up of a group of musicians who play together using a specific combination of instruments. Actually, the word \"\"symphony\"\" comes from the combination of two Greek words, {sym,} which means \"\"together,\"\" and {phonos}, which means \"\"sound.\"\" The string instruments are a key part of the symphony orchestra because they make up more than half of its instruments. The other three families of the symphony orchestra are the woodwind family, the brass family, and the percussion family.\""
                ]
              }
            }
          ]
        },
        {
          "id": "B_2_7",
          "type": "COWNSLevel",
          "description": "Level 7 Node",
          "override": {
            "level": 7
          },
          "children": [{
              "id": "B_2_7_1",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_7_1_1",
                  "type": "COWNSStage1",
                  "children": [{
                      "id": "B_2_7_1_1_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_1_1_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "7_1",
                          "trialId": "71101",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "How does Cecilia respond to Marta on this page?",
                          "answer": "She seems skeptical.",
                          "intervention": "",
                          "foil1": "She seems sympathetic.",
                          "foil2": "She feels sorry for Marta.",
                          "foil3": "She thinks Marta is right.",
                          "pages": [
                            "\"\"\"You see,\"\" Marta said, smiling, \"\"I've never had one. Not that I've never wanted one�I just never had a chance to get one before now.\"\"\"",
                            "\"Marta thought for a minute, without moving at all.\"",
                            "\"\"\"And, after all, it was my birthday last week. This is like a birthday present. A present from the universe!\"\"\"",
                            "\"\"\"Huh!\"\" said Cecilia. She looked at Marta through narrowed eyes.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_1_1_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_1_1_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "7_1",
                          "trialId": "71102",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "What is Marta probably gripping?",
                          "answer": "the squirming bag",
                          "intervention": "",
                          "foil1": "Cecilia's hand",
                          "foil2": "the birthday present she got last week",
                          "foil3": "about the fact that she found it first",
                          "pages": [
                            "\"\"\"And,\"\" continued Marta, looking more serious. \"\"I found it first. Since I found it, it's only fair that I should have it.\"\"\"",
                            "\"Marta inched closer to Cecilia and changed her grip, looking intently at her big sister.\"",
                            "\"\"\"I've wanted one for a very long time, and you only just thought about it today!\"\"\"",
                            "\"Cecilia leaned back on her heels, while the paper bag squirmed a bit.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_1_1_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_1_1_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "7_1",
                          "trialId": "71103",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "How does Marta change her strategy?",
                          "answer": "\"She argued about fairness first, and then she tried to be nice.\"",
                          "intervention": "",
                          "foil1": "\"She tried being nice to Cecilia, but then she got angry.\"",
                          "foil2": "\"She tried being angry with Cecilia, but then she remembered that it was her birthday.\"",
                          "foil3": "\"She argued about fairness first, and then she argued that it was her birthday.\"",
                          "pages": [
                            "\"\"\"Besides, you're older, so you always get things! It's not fair to me. You had one before, and I've never had one.\"\"\"",
                            "\"Marta pulled the bag just a little closer, and the sounds inside got a little louder.\"",
                            "\"Changing her strategy, Marta implored, \"\"Come on, Cecilia, just this once. I'll do your chores this week...\"\"\"",
                            "\"\"\"Hmm,\"\" responded Cecilia. She pursed her lips grimly.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_1_1_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_1_1_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "7_1",
                          "trialId": "71104",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "What does Marta say she is the perfect one for?",
                          "answer": "giving love",
                          "intervention": "",
                          "foil1": "holding a squirming bag",
                          "foil2": "doing cecilia's chores",
                          "foil3": "settling an argument",
                          "pages": [
                            "\"\"\"It needs lots of love, and I'm the perfect one to give it!\"\" Marta's voice got higher-pitched and her face got redder. \"\"You have to give it to me!\"\"\"",
                            "\"She grabbed on with her other hand. The bag squirmed a bit more, and the noise got more insistent.\"",
                            "\"Cecilia matched her grip, and they started to pull...and that's how the argument was settled.\""
                          ]
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_7_1_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_7_1_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_1_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "7_1",
                          "trialId": "71201",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "\"Marta is standing close to her sister Cecilia, and smiling at her.\"",
                          "intervention": "Summarizing",
                          "foil1": "Marta pulls out a paper bag with something squirming inside.",
                          "foil2": "Marta is reminding Cecilia about her birthday when she sees the bag.",
                          "foil3": "\"Marta is inching closer to her sister Cecilia, and pursing her lips.\"",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_1_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_1_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "7_1",
                          "trialId": "71202",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "They hold a paper bag between them that squirms and makes noises.",
                          "intervention": "Summarizing",
                          "foil1": "\"Marta wanted it for a very long time, and Cecilia had the last one.\"",
                          "foil2": "Marta thinks it is a birthday present from the universe.",
                          "foil3": "\"Cecilia does not respond to Marta, but noises come from the still bag.\"",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_1_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_1_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "7_1",
                          "trialId": "71203",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "Marta tries to convince Cecilia to give her the bag and its contents.",
                          "intervention": "Summarizing",
                          "foil1": "Marta shifts with Cecilia and changes her grip.",
                          "foil2": "Marta and Cecilia both pull on the bag to settle the argument.",
                          "foil3": "Cecilia tries to convince Marta to give her the bag and its contents.",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_1_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_1_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "7_1",
                          "trialId": "71204",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "\"She reminds Cecilia about her birthday, then she appeals to her sister's sense of fairness, and then she just begs.\"",
                          "intervention": "Summarizing",
                          "foil1": "\"Cecilia narrows her eyes, purses her lips, and matches Marta's grip before leaning back on her heels.\"",
                          "foil2": "\"She inches forward and shifts her grip, while trying to wiggle the bag loose from Cecilia's grip.\"",
                          "foil3": "\"The noise gets more insistent as Marta pulls on the bag, so she changes her strategy from talking to action.\"",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_1_2_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_1_2_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "7_1",
                          "trialId": "71205",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "\"Finally, Marta and Cecilia both just pull on the bag to see who gets it.\"",
                          "intervention": "Summarizing",
                          "foil1": "\"After they argue for a while, Cecilia lets Marta have the bag.\"",
                          "foil2": "\"After they argue for a while, Cecilia agrees to share the creature in the bag.\"",
                          "foil3": "\"Finally, Marta begs Cecilia for the bag, but Cecilia takes it anyway.\"",
                          "graphicName": ""
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_7_1_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_7_1_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_1_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "7_1",
                          "trialId": "71301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "How does the argument get settled?",
                          "answer": "They pull on the bag to see who gets it.",
                          "intervention": "Summarizing",
                          "foil1": "Cecilia lets Marta have the bag after hearing her arguments.",
                          "foil2": "Marta convinced Cecilia to let her have the bag.",
                          "foil3": "Cecilia listens carefully to all that Marta says."
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_1_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_1_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "7_1",
                          "trialId": "71302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "What do we know about the contents of the bag?",
                          "answer": "We only know that it squirms and makes noises.",
                          "intervention": "Summarizing",
                          "foil1": "We know that it is a kitten or a puppy.",
                          "foil2": "We do not know anything for sure about the contents of the bag.",
                          "foil3": "We know that the bag is full of paper."
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_1_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_1_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "7_1",
                          "trialId": "71303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"What does it mean that the noise from the bag gets \"\"more insistent\"\" as the sister's argument progresses?\"",
                          "answer": "Whatever is in the bag wants some attention.",
                          "intervention": "Summarizing",
                          "foil1": "Whatever is in the bag wants to assist with the decision.",
                          "foil2": "The noise is loud at first and then quiets down.",
                          "foil3": "The noise gets deeper and deeper."
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_1_3_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_1_3_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "7_1",
                          "trialId": "71304",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Which of the following outcomes would you NOT expect?",
                          "answer": "Marta will forget about the bag and walk away.",
                          "intervention": "Summarizing",
                          "foil1": "\"While the sisters are struggling over the bag, the kitten gets out and runs off.\"",
                          "foil2": "Cecilia pulls the bag and its contents out of her little sister's hands.",
                          "foil3": "The bag rips into two pieces and the contents fall out."
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_1_3_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_1_3_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "7_1",
                          "trialId": "71305",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Why doesn't the summary say who won the fight over the bag?",
                          "answer": "The story does not say who won and ended up with the bag.",
                          "intervention": "Summarizing",
                          "foil1": "It is so obvious who won that it is not worth stating it.",
                          "foil2": "Explaining why Cecilia won would make the summary too long.",
                          "foil3": "Knowing who won is not important to most readers."
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 80,
                  "override": {
                    "summary": "\"Marta is standing close to her sister Cecilia, and smiling at her. They hold a paper bag between them that squirms and makes noises. Marta tries to convince Cecilia to give her the bag and its contents. She reminds Cecilia about her birthday, then she appeals to her sister's sense of fairness, and then she just begs. Finally, Marta and Cecilia both just pull on the bag to see who gets it.\""
                  }
                }
              ],
              "override": {
                "passageText": [
                  "\"\"\"You see,\"\" Marta said, smiling, \"\"I've never had one. Not that I've never wanted one�I just never had a chance to get one before now.\"\"\"",
                  "\"Marta thought for a minute, without moving at all.\"",
                  "\"\"\"And, after all, it was my birthday last week. This is like a birthday present. A present from the universe!\"\"\"",
                  "\"\"\"Huh!\"\" said Cecilia. She looked at Marta through narrowed eyes.\"",
                  "\"\"\"And,\"\" continued Marta, looking more serious. \"\"I found it first. Since I found it, it's only fair that I should have it.\"\"\"",
                  "\"Marta inched closer to Cecilia and changed her grip, looking intently at her big sister.\"",
                  "\"\"\"I've wanted one for a very long time, and you only just thought about it today!\"\"\"",
                  "\"Cecilia leaned back on her heels, while the paper bag squirmed a bit.\"",
                  "\"\"\"Besides, you're older, so you always get things! It's not fair to me. You had one before, and I've never had one.\"\"\"",
                  "\"Marta pulled the bag just a little closer, and the sounds inside got a little louder.\"",
                  "\"Changing her strategy, Marta implored, \"\"Come on, Cecilia, just this once. I'll do your chores this week...\"\"\"",
                  "\"\"\"Hmm,\"\" responded Cecilia. She pursed her lips grimly.\"",
                  "\"\"\"It needs lots of love, and I'm the perfect one to give it!\"\" Marta's voice got higher-pitched and her face got redder. \"\"You have to give it to me!\"\"\"",
                  "\"She grabbed on with her other hand. The bag squirmed a bit more, and the noise got more insistent.\"",
                  "\"Cecilia matched her grip, and they started to pull...and that's how the argument was settled.\""
                ]
              }
            },
            {
              "id": "B_2_7_2",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_7_2_1",
                  "type": "COWNSStage1",
                  "children": [{
                      "id": "B_2_7_2_1_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_2_1_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "7_2",
                          "trialId": "72101",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"Why does Wendy exclaim, \"\"O father!\"\"\"",
                          "answer": "She is upset with him for breaking his promise.",
                          "intervention": "",
                          "foil1": "She is upset with him for yelling at Michael.",
                          "foil2": "She is impressed with him for playing such a clever prank.",
                          "foil3": "She is impressed with him for being such a good role model.",
                          "pages": [
                            "\"Wendy had a splendid idea. \"\"Why not both take it at the same time?\"\"\"",
                            "\"\"\"Certainly,\"\" said Mr. Darling. \"\"Are you ready, Michael?\"\"\"",
                            "\"Wendy gave the words, one, two, three, and Michael took his medicine, but Mr. Darling slipped his behind his back.\"",
                            "\"There was a yell of rage from Michael, and \"\"O father!\"\" Wendy exclaimed.\"",
                            "\"\"\"What do you mean by 'O father'?\"\" Mr. Darling demanded. \"\"Stop that row, Michael. I meant to take mine, but I�I missed it. \"\"\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_2_1_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_2_1_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "7_2",
                          "trialId": "72102",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"What is the meaning of \"\"reproachfully\"\"?\"",
                          "answer": "with disapproval",
                          "intervention": "",
                          "foil1": "with approval",
                          "foil2": "with interest",
                          "foil3": "with disinterest",
                          "pages": [
                            "\"It was dreadful the way all the three were looking at him, just as if they did not admire him. \"\"Look here, all of you,\"\" he said entreatingly, as soon as Nana had gone into the bathroom. \"\"I have just thought of a splendid joke. I shall pour my medicine into Nana's bowl, and she will drink it, thinking it is milk!\"\"\"",
                            "\"It was the color of milk; but the children did not have their father's sense of humor, and they looked at him reproachfully as he poured the medicine into Nana's bowl. \"\"What fun!\"\" he said doubtfully, and they did not dare expose him when Mrs. Darling and Nana returned.\"",
                            "\"\"\"Nana, good dog,\"\" he said, patting her, \"\"I have put a little milk into your bowl, Nana.\"\"\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_2_1_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_2_1_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "7_2",
                          "trialId": "72103",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "Why does Mr. Darling yell that his prank was only a joke?",
                          "answer": "\"He is ashamed, but doesn't want to admit that he did anything wrong.\"",
                          "intervention": "",
                          "foil1": "He is angry that no one gets his sense of humor.",
                          "foil2": "He wants everyone to see how funny his joke was.",
                          "foil3": "He is jealous that his children care more about Nana than him.",
                          "pages": [
                            "\"Nana wagged her tail, ran to the medicine, and began lapping it. Then she gave Mr. Darling such a look, not an angry look: she showed him the great red tear that makes us so sorry for noble dogs, and crept into her kennel.\"",
                            "\"Mr. Darling was frightfully ashamed of himself, but he would not give in. In a horrid silence Mrs. Darling smelt the bowl. \"\"O George,\"\" she said, \"\"it's your medicine!\"\"\"",
                            "\"\"\"It was only a joke,\"\" he roared, while she comforted her boys, and Wendy hugged Nana. \"\"Much good,\"\" he said bitterly, \"\"my wearing myself to the bone trying to be funny in this house.\"\"\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_2_1_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_2_1_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "7_2",
                          "trialId": "72104",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "What will Mr. Darling probably do next?",
                          "answer": "put nana out of the nursery",
                          "intervention": "",
                          "foil1": "put the children out of the nursery",
                          "foil2": "apologize to the children",
                          "foil3": "apologize to nana",
                          "pages": [
                            "\"And still Wendy hugged Nana. \"\"That's right,\"\" he shouted. \"\"Coddle her! Nobody coddles me. Oh dear no! I am only the breadwinner, why should I be coddled�why, why, why!\"\"\"",
                            "\"\"\"George,\"\" Mrs. Darling entreated him, \"\"not so loud; the servants will hear you.\"\" Somehow they had got into the way of calling Liza the servants.\"",
                            "\"\"\"Let them!\"\" he answered recklessly. \"\"Bring in the whole world. But I refuse to allow that dog to lord it in my nursery for an hour longer. \"\"\""
                          ]
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_7_2_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_7_2_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_2_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "7_2",
                          "trialId": "72201",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "\"After agreeing to take his medicine along with Michael, Mr. Darling hides it behind his back.\"",
                          "intervention": "Summarizing",
                          "foil1": "\"Wendy says,\"\" one, two, three,\"\" to prompt Michael to take his medicine.\"",
                          "foil2": "Michael and Mr. Darling both try to take their medicine but only Michael succeeds.",
                          "foil3": "\"Mr. Darling tries to play a trick on their dog Nana, but she is too clever and won't drink his medicine.\"",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_2_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_2_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "7_2",
                          "trialId": "72202",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "His children yell at him for cheating.",
                          "intervention": "Summarizing",
                          "foil1": "\"Wendy cries \"\"O brother,\"\" because she thinks her father is silly.\"",
                          "foil2": "Mrs. Darling finds his medicine in the dog's bowl.",
                          "foil3": "Michael starts rowing their boat onward.",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_2_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_2_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "7_2",
                          "trialId": "72203",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "\"As a joke, Mr. Darling pours the medicine in Nana's food bowl.\"",
                          "intervention": "Summarizing",
                          "foil1": "\"Wendy cries \"\"O father!\"\" in a disappointed voice.\"",
                          "foil2": "Mr. Darling convinces the children that it was an honest mistake.",
                          "foil3": "\"With their reproachful looks, the children force Mr. Darling to take the medicine.\"",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_2_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_2_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "7_2",
                          "trialId": "72204",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "\"Nana looks sad after she tastes the medicine, and no one laughs.\"",
                          "intervention": "Summarizing",
                          "foil1": "Mr. Darling feels bad about tricking Nana and drinks the medicine.",
                          "foil2": "Mrs. Darling worries that the servants will hear the yelling.",
                          "foil3": "The children start crying and try to protect Nana.",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_2_2_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_2_2_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "7_2",
                          "trialId": "72205",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "\"Mr. Darling feels bad, but hides it by yelling that Nana is spoiled and should no longer stay in the nursery.\"",
                          "intervention": "Summarizing",
                          "foil1": "\"Mr. Darling is mad that his children like Nana better, so he decides to punish her.\"",
                          "foil2": "\"Mr. Darling loudly complains that no one understands his sense of humor, as Mrs. Darling tries to comfort Nana.\"",
                          "foil3": "\"Nana bites Mr. Darling for tricking her, so he declares that she is dangerous and should not be allowed to stay in the nursery.\"",
                          "graphicName": ""
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_7_2_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_7_2_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_2_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "7_2",
                          "trialId": "72301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Which of the following is true?",
                          "answer": "Mr. Darling doesn't want his children to think poorly of him.",
                          "intervention": "Summarizing",
                          "foil1": "Mr. Darling doesn't care that his children are disappointed with him.",
                          "foil2": "Mr. Darling is glad he managed to trick Nana into taking his medicine.",
                          "foil3": "Mr. Darling gets mad when Nana accidentally drinks his medicine."
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_2_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_2_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "7_2",
                          "trialId": "72302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"According to the summary, why does Mr. Darling give his medicine to Nana?\"",
                          "answer": "He is playing a joke.",
                          "intervention": "Summarizing",
                          "foil1": "Nana is sick.",
                          "foil2": "He doesn't know any better.",
                          "foil3": "He wants to hide that he didn't take it."
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_2_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_2_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "7_2",
                          "trialId": "72303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Why is Mr. Darling so mad that he yells about them coddling Nana?",
                          "answer": "\"He is too proud to admit that his joke was a bad idea, so he yells instead.\"",
                          "intervention": "Summarizing",
                          "foil1": "He feels that coddling is wrong and no one should be coddled.",
                          "foil2": "He is angry that Nana likes Wendy better than she likes him.",
                          "foil3": "He is upset that his joke was discovered and that now his wife will make him drink his medicine."
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_2_3_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_2_3_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "7_2",
                          "trialId": "72304",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Which best describes how the children felt when Mr. Darling hid his medicine behind his back?",
                          "answer": "angry",
                          "intervention": "Summarizing",
                          "foil1": "spoiled",
                          "foil2": "playful",
                          "foil3": "embarrassed"
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_2_3_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_2_3_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "7_2",
                          "trialId": "72305",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"According to the summary, what led Mr. Darling to think his children spoil Nana?\"",
                          "answer": "The children do not laugh at the joke he plays on Nana.",
                          "intervention": "Summarizing",
                          "foil1": "They yell at him for pouring the medicine in Nana's bowl.",
                          "foil2": "The children always take her side over their dad's.",
                          "foil3": "They refuse to speak to him until he apologizes to Nana."
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 80,
                  "override": {
                    "summary": "\"After agreeing to take his medicine along with Michael, Mr. Darling hides it behind his back. His children yell at him for cheating. As a joke, Mr. Darling pours the medicine in Nana's food bowl. Nana looks sad after she tastes the medicine, and no one laughs. Mr. Darling feels bad, but hides it by yelling that Nana is spoiled and should no longer stay in the nursery.\""
                  }
                }
              ],
              "override": {
                "passageText": [
                  "\"Wendy had a splendid idea. \"\"Why not both take it at the same time?\"\"\"",
                  "\"\"\"Certainly,\"\" said Mr. Darling. \"\"Are you ready, Michael?\"\"\"",
                  "\"Wendy gave the words, one, two, three, and Michael took his medicine, but Mr. Darling slipped his behind his back.\"",
                  "\"There was a yell of rage from Michael, and \"\"O father!\"\" Wendy exclaimed.\"",
                  "\"\"\"What do you mean by 'O father'?\"\" Mr. Darling demanded. \"\"Stop that row, Michael. I meant to take mine, but I�I missed it. \"\"\"",
                  "\"It was dreadful the way all the three were looking at him, just as if they did not admire him. \"\"Look here, all of you,\"\" he said entreatingly, as soon as Nana had gone into the bathroom. \"\"I have just thought of a splendid joke. I shall pour my medicine into Nana's bowl, and she will drink it, thinking it is milk!\"\"\"",
                  "\"It was the color of milk; but the children did not have their father's sense of humor, and they looked at him reproachfully as he poured the medicine into Nana's bowl. \"\"What fun!\"\" he said doubtfully, and they did not dare expose him when Mrs. Darling and Nana returned.\"",
                  "\"\"\"Nana, good dog,\"\" he said, patting her, \"\"I have put a little milk into your bowl, Nana.\"\"\"",
                  "\"Nana wagged her tail, ran to the medicine, and began lapping it. Then she gave Mr. Darling such a look, not an angry look: she showed him the great red tear that makes us so sorry for noble dogs, and crept into her kennel.\"",
                  "\"Mr. Darling was frightfully ashamed of himself, but he would not give in. In a horrid silence Mrs. Darling smelt the bowl. \"\"O George,\"\" she said, \"\"it's your medicine!\"\"\"",
                  "\"\"\"It was only a joke,\"\" he roared, while she comforted her boys, and Wendy hugged Nana. \"\"Much good,\"\" he said bitterly, \"\"my wearing myself to the bone trying to be funny in this house.\"\"\"",
                  "\"And still Wendy hugged Nana. \"\"That's right,\"\" he shouted. \"\"Coddle her! Nobody coddles me. Oh dear no! I am only the breadwinner, why should I be coddled�why, why, why!\"\"\"",
                  "\"\"\"George,\"\" Mrs. Darling entreated him, \"\"not so loud; the servants will hear you.\"\" Somehow they had got into the way of calling Liza the servants.\"",
                  "\"\"\"Let them!\"\" he answered recklessly. \"\"Bring in the whole world. But I refuse to allow that dog to lord it in my nursery for an hour longer. \"\"\""
                ]
              }
            },
            {
              "id": "B_2_7_3",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_7_3_1",
                  "type": "COWNSStage1",
                  "children": [{
                      "id": "B_2_7_3_1_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_3_1_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "7_3",
                          "trialId": "73101",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "What was strange about Billy's dream?",
                          "answer": "\"He expected something scary, but nothing happened.\"",
                          "intervention": "",
                          "foil1": "He had dreamed that he had to get a drink of water.",
                          "foil2": "It was full of scary things and yet he didn't feel scared.",
                          "foil3": "\"It was so easy to remember, it almost seemed real.\"",
                          "pages": [
                            "\"Rubbing his eyes, Billy stumbled out to the kitchen to get a drink. He'd been having a strange dream: he kept expecting to see something scary, but there was nothing there.\"",
                            "\"Filling up his glass at the sink, Billy noticed a dark form lying on the couch. Cautiously, he said, \"\"Uh... hello?\"\"\"",
                            "\"\"\"Wh-wha, hum, ha!\"\" said the form, and it suddenly stood bolt upright. It had rabbit ears, which flopped to one side of its head, and some fur on its face was matted with a bit of drool. It stood there uncertainly, trying to clear the sleep from its head.\"",
                            "\"Billy blinked. \"\"Rabbit-monster?\"\" he asked, \"\"What are you doing here?\"\"\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_3_1_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_3_1_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "7_3",
                          "trialId": "73102",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "Why was the rabbit-monster lying on the couch?",
                          "answer": "It had fallen asleep.",
                          "intervention": "",
                          "foil1": "It was waiting there to scare Billy.",
                          "foil2": "It was looking for its fangs.",
                          "foil3": "It lived there.",
                          "pages": [
                            "\"\"\"Well! I was... I... was just about to come into your dream, when I lay down to close my eyes for a bit. But I'm ready now!\"\" said the rabbit-monster, looking about the couch.\"",
                            "\"\"\"I'm not asleep now,\"\" said Billy, sipping his water.\"",
                            "\"\"\"Oh, yes. I see,\"\" said the rabbit-monster. It found what it was looking for, and popped a set of fangs into its mouth.\"",
                            "\"As his eyes adjusted to the darkness, Billy noticed that the rabbit-monster seemed to have darker fur on its lower half.\"",
                            "\"\"\"Ynr lmphg ah...\"\" said the rabbit-monster, and then removed its fangs again. \"\"You're looking at my fur, aren't you?\"\" it asked.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_3_1_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_3_1_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "7_3",
                          "trialId": "73103",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "What happens when the rabbit-monster tries to scare Billy?",
                          "answer": "Billy doesn't understand.",
                          "intervention": "",
                          "foil1": "Billy is scared but doesn't show it.",
                          "foil2": "Billy runs away.",
                          "foil3": "Billy realizes that he is still dreaming.",
                          "pages": [
                            "\"\"\"Well, yes,\"\" replied Billy. \"\"All the times you've been in my dreams, I never noticed that you don't really match.\"\"\"",
                            "\"\"\"Laundry accident,\"\" said the rabbit-monster. \"\"But the point is�RRAUGH!\"\" Roaring, the rabbit-monster raised its arms over its head and bumped into the living room lamp.\"",
                            "\"\"\"Pardon me?\"\" said Billy.\"",
                            "\"\"\"Oh, nothing,\"\" said the rabbit-monster, steadying the lamp. \"\"So... how've you been?\"\"\"",
                            "\"\"\"Pretty good,\"\" said Billy. \"\"I'm in the sixth grade now.\"\"\"",
                            "\"\"\"Sixth grade, wow! I remember when you were tiny.\"\"\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_3_1_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_3_1_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "7_3",
                          "trialId": "73104",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "How did the rabbit-monster fade away?",
                          "answer": "from bottom to top ",
                          "intervention": "",
                          "foil1": "from top to bottom ",
                          "foil2": "\"first its body, then its face, and finally its smile \"",
                          "foil3": "\"all at once, with a popping sound \"",
                          "pages": [
                            "\"\"\"I remember you as being taller,\"\" said Billy. \"\"It's been a while since you've been in my dreams, hasn't it?\"\"\"",
                            "\"\"\"Well, budget cuts. More dreams, fewer monsters,\"\" said the rabbit-monster. It shifted awkwardly to its left foot and smoothed out a rough patch of fur.\"",
                            "\"\"\"I should really be getting back to bed,\"\" said Billy.\"",
                            "\"\"\"I, uh, should really go, too. Lots of dreams tonight...\"\"\"",
                            "\"\"\"Okay, goodnight then,\"\" said Billy, putting down his glass.\"",
                            "\"\"\"Goodnight,\"\" said the rabbit-monster. It faded away slowly, first its darker legs, then its lighter top, and finally its ears. Billy shrugged and turned to go back to bed.\""
                          ]
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_7_3_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_7_3_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_3_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "7_3",
                          "trialId": "73201",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "Billy awakens from a dream and goes into the kitchen.",
                          "intervention": "Summarizing",
                          "foil1": "Billy has a strange dream in which he feels scared.",
                          "foil2": "Billy dreams that he has woken up and is getting a drink of water.",
                          "foil3": "\"Billy says, \"\"hello\"\" to the rabbit-monster asleep on his couch.\"",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_3_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_3_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "7_3",
                          "trialId": "73202",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "He sees a dark form on the couch that turns out to be the rabbit-monster.",
                          "intervention": "Summarizing",
                          "foil1": "\"The rabbit-monster stands up quickly, yet it seems awkward and sleepy.\"",
                          "foil2": "Billy is not scared of the rabbit-monster.",
                          "foil3": "\"Billy is thirsty, so he pours a glass of water and sips at it.\"",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_3_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_3_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "7_3",
                          "trialId": "73203",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "This is a monster that showed up in Billy's dreams and scared him when he was younger.",
                          "intervention": "Summarizing",
                          "foil1": "The rabbit-monster was looking about the couch for its fangs.",
                          "foil2": "\"Billy is a bit scared of this monster, because it used to show up in his dreams when he was younger.\"",
                          "foil3": "\"Billy says goodbye to the rabbit-monster, then returns to bed.\"",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_3_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_3_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "7_3",
                          "trialId": "73204",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "\"Now the rabbit-monster seems shabby and bumbling, and Billy is not scared at all.\"",
                          "intervention": "Summarizing",
                          "foil1": "\"Billy is a bit scared of this rabbit-monster, because it used to show up in his dreams.\"",
                          "foil2": "Billy notices how scary the rabbit-monster's fangs look.",
                          "foil3": "\"The rabbit-monster looks for its fangs, and Billy points out that he is not asleep.\"",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_3_2_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_3_2_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "7_3",
                          "trialId": "73205",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "\"After a brief conversation, the rabbit-monster departs to haunt other people's dreams and Billy returns to bed.\"",
                          "intervention": "Summarizing",
                          "foil1": "\"After answering Billy's questions, the rabbit-monster leaves and then Billy finally gets himself the drink of water he came for.\"",
                          "foil2": "\"They have a brief conversation, then the rabbit-monster disappears, leaving Billy to worry about its return.\"",
                          "foil3": "\"They talk for a while and the rabbit-monster pretends to fade away, but really it plans to go into Billy's next dream and give him a good scare.\"",
                          "graphicName": ""
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_7_3_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_7_3_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_3_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "7_3",
                          "trialId": "73301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"According to the summary, when did the rabbit-monster scare Billy?\"",
                          "answer": "in Billy's dreams when he was younger ",
                          "intervention": "Summarizing",
                          "foil1": "after it got off of the couch ",
                          "foil2": "\"in Billy's kitchen, before leaving \"",
                          "foil3": "after Billy returned to bed "
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_3_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_3_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "7_3",
                          "trialId": "73302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Which of the following is NOT true about how the rabbit-monster seems when Billy finds him on the couch?",
                          "answer": "It has a menacing presence.",
                          "intervention": "Summarizing",
                          "foil1": "Its fur is shabby.",
                          "foil2": "Its movements lack grace.",
                          "foil3": "It is willing to talk."
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_3_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_3_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "7_3",
                          "trialId": "73303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "How can you tell from the summary that Billy is no longer afraid of the rabbit-monster?",
                          "answer": "It tells you that Billy is not scared at all.",
                          "intervention": "Summarizing",
                          "foil1": "It tells you that the rabbit-monster scared Billy when he was younger.",
                          "foil2": "It shows you that the rabbit-monster is on the couch.",
                          "foil3": "It shows you that Billy returns to bed."
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_3_3_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_3_3_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "7_3",
                          "trialId": "73304",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Which of these statements is implied in the summary?",
                          "answer": "The rabbit-monster is less scary because Billy is awake.",
                          "intervention": "Summarizing",
                          "foil1": "The rabbit-monster used to work harder at scaring Billy.",
                          "foil2": "\"Secretly, Billy was never frightened of the rabbit monster.\"",
                          "foil3": "Other monsters were better at scaring Billy."
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_3_3_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_3_3_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "7_3",
                          "trialId": "73305",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "What don't we learn from the summary?",
                          "answer": "why Billy goes into the kitchen ",
                          "intervention": "Summarizing",
                          "foil1": "where Billy had met the rabbit-monster before ",
                          "foil2": "where Billy finds the rabbit-monster ",
                          "foil3": "why the rabbit-monster is not scary to Billy anymore "
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 80,
                  "override": {
                    "summary": "\"Billy awakens from a dream and goes into the kitchen. He sees a dark form on the couch that turns out to be the rabbit-monster. This is a monster that showed up in Billy's dreams and scared him when he was younger. Now the rabbit-monster seems shabby and bumbling, and Billy is not scared at all. After a brief conversation, the rabbit-monster departs to haunt other people's dreams and Billy returns to bed.\""
                  }
                }
              ],
              "override": {
                "passageText": [
                  "\"Rubbing his eyes, Billy stumbled out to the kitchen to get a drink. He'd been having a strange dream: he kept expecting to see something scary, but there was nothing there.\"",
                  "\"Filling up his glass at the sink, Billy noticed a dark form lying on the couch. Cautiously, he said, \"\"Uh... hello?\"\"\"",
                  "\"\"\"Wh-wha, hum, ha!\"\" said the form, and it suddenly stood bolt upright. It had rabbit ears, which flopped to one side of its head, and some fur on its face was matted with a bit of drool. It stood there uncertainly, trying to clear the sleep from its head.\"",
                  "\"Billy blinked. \"\"Rabbit-monster?\"\" he asked, \"\"What are you doing here?\"\"\"",
                  "\"\"\"Well! I was... I... was just about to come into your dream, when I lay down to close my eyes for a bit. But I'm ready now!\"\" said the rabbit-monster, looking about the couch.\"",
                  "\"\"\"I'm not asleep now,\"\" said Billy, sipping his water.\"",
                  "\"\"\"Oh, yes. I see,\"\" said the rabbit-monster. It found what it was looking for, and popped a set of fangs into its mouth.\"",
                  "\"As his eyes adjusted to the darkness, Billy noticed that the rabbit-monster seemed to have darker fur on its lower half.\"",
                  "\"\"\"Ynr lmphg ah...\"\" said the rabbit-monster, and then removed its fangs again. \"\"You're looking at my fur, aren't you?\"\" it asked.\"",
                  "\"\"\"Well, yes,\"\" replied Billy. \"\"All the times you've been in my dreams, I never noticed that you don't really match.\"\"\"",
                  "\"\"\"Laundry accident,\"\" said the rabbit-monster. \"\"But the point is�RRAUGH!\"\" Roaring, the rabbit-monster raised its arms over its head and bumped into the living room lamp.\"",
                  "\"\"\"Pardon me?\"\" said Billy.\"",
                  "\"\"\"Oh, nothing,\"\" said the rabbit-monster, steadying the lamp. \"\"So... how've you been?\"\"\"",
                  "\"\"\"Pretty good,\"\" said Billy. \"\"I'm in the sixth grade now.\"\"\"",
                  "\"\"\"Sixth grade, wow! I remember when you were tiny.\"\"\"",
                  "\"\"\"I remember you as being taller,\"\" said Billy. \"\"It's been a while since you've been in my dreams, hasn't it?\"\"\"",
                  "\"\"\"Well, budget cuts. More dreams, fewer monsters,\"\" said the rabbit-monster. It shifted awkwardly to its left foot and smoothed out a rough patch of fur.\"",
                  "\"\"\"I should really be getting back to bed,\"\" said Billy.\"",
                  "\"\"\"I, uh, should really go, too. Lots of dreams tonight...\"\"\"",
                  "\"\"\"Okay, goodnight then,\"\" said Billy, putting down his glass.\"",
                  "\"\"\"Goodnight,\"\" said the rabbit-monster. It faded away slowly, first its darker legs, then its lighter top, and finally its ears. Billy shrugged and turned to go back to bed.\""
                ]
              }
            },
            {
              "id": "B_2_7_4",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_7_4_1",
                  "type": "COWNSStage1",
                  "children": [{
                      "id": "B_2_7_4_1_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_4_1_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "7_4",
                          "trialId": "74101",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"From the description of the Ork so far, which of these animals is it most likely to resemble?\"",
                          "answer": "a seagull",
                          "intervention": "",
                          "foil1": "a horse",
                          "foil2": "a giraffe",
                          "foil3": "a shark",
                          "pages": [
                            "\"\"\"I wonder,\"\" whispered Trot, \"\"what it is.\"\"\"",
                            "\"\"\"Who, me?\"\" exclaimed the creature in a shrill, high-pitched voice. \"\"Why, I'm an Ork.\"\"\"",
                            "\"\"\"Oh!\"\" said the girl. \"\"But what is an Ork?\"\"\"",
                            "\"\"\"I am,\"\" he repeated, a little proudly, as he shook the water from his funny wings; \"\"and if ever an Ork was glad to be out of the water and on dry land again, you can be mighty sure that I'm that especial, individual Ork!\"\"\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_4_1_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_4_1_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "7_4",
                          "trialId": "74102",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "How much time did the Ork have to spend underwater?",
                          "answer": "ten minutes",
                          "intervention": "",
                          "foil1": "sixty seconds too long",
                          "foil2": "less than nine minutes",
                          "foil3": "sixty-nine seconds",
                          "pages": [
                            "\"\"\"Have you been in the water long?\"\" inquired Cap'n Bill, thinking it only polite to show an interest in the strange creature.\"",
                            "\"\"\"Why, this last ducking was about ten minutes, I believe, and that's about nine minutes and sixty seconds too long for comfort,\"\" was the reply. \"\"But last night I was in an awful pickle, I assure you. The whirlpool caught me, and �\"\"\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_4_1_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_4_1_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "7_4",
                          "trialId": "74103",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "How does the Ork feel about being in the water?",
                          "answer": "The Ork hates being in the water. He prefers staying on dry land.",
                          "intervention": "",
                          "foil1": "The Ork loves swimming underwater. He swims whenever he gets a chance.",
                          "foil2": "The Ork doesn't mind being in the water. He just doesn't like whirlpools.",
                          "foil3": "The Ork doesn't have an opinion on water. He doesn't care if he's in the water or on dry land.",
                          "pages": [
                            "\"\"\"Oh, were you in the whirlpool, too?\"\" asked Trot eagerly.\"",
                            "He gave her a glance that was somewhat reproachful.",
                            "\"\"\"I believe I was mentioning the fact, young lady, when your desire to talk interrupted me,\"\" said the Ork. \"\"I am not usually careless in my actions, but that whirlpool was so busy yesterday that I thought I'd see what mischief it was up to. So I flew a little too near it and the suction of the air drew me down into the depths of the ocean. Water and I are natural enemies, and it would have conquered me this time had not a bevy of pretty mermaids come to my assistance and dragged me away from the whirling water and far up into a cavern, where they deserted me.\"\"\""
                          ]
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_7_4_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_7_4_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_4_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "7_4",
                          "trialId": "74201",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "Trot and Cap'n Bill meet a creature called an Ork.",
                          "intervention": "Summarizing",
                          "foil1": "An Ork warns Cap'n Bill about a whirlpool.",
                          "foil2": "Trot and Cap'n Bill meet a group of mermaids.",
                          "foil3": "The Ork tells Trot how he was rescued by a group of mermaids.",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_4_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_4_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "7_4",
                          "trialId": "74202",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "\"The Ork has a shrill, high-pitched voice and wings.\"",
                          "intervention": "Summarizing",
                          "foil1": "The Ork flies near the whirlpool.",
                          "foil2": "Trot and Cap'n Bill are glad to be on dry land again.",
                          "foil3": "\"Trot and Cap'n Bill are surprised to see their old friend, the Ork.\"",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_4_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_4_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "7_4",
                          "trialId": "74203",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "\"He tells Trot and Cap'n Bill about being in an \"\"awful pickle.\"\"\"",
                          "intervention": "Summarizing",
                          "foil1": "He politely shows an interest in Cap'n Bill.",
                          "foil2": "He tells Trot that he likes being in the water.",
                          "foil3": "He is dunked in the water for 10 minutes by Cap'n Bill.",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_4_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_4_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "7_4",
                          "trialId": "74204",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "The Ork had been caught in a whirlpool and trapped underwater.",
                          "intervention": "Summarizing",
                          "foil1": "They learn the Ork is comfortable with staying underwater for long periods of time.",
                          "foil2": "The Ork tells them he had an awful pickle last night.",
                          "foil3": "Trot asks Cap'n Bill what it is.",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_4_2_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_4_2_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "7_4",
                          "trialId": "74205",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "\"But, after ten minutes in the water, he was rescued by a group of mermaids.\"",
                          "intervention": "Summarizing",
                          "foil1": "The Ork tells Trot and Cap'n Bill that his natural enemy is water.",
                          "foil2": "\"The Ork pledges that he'll never be careless in his actions, again.\"",
                          "foil3": "But then the Ork met beautiful mermaids who deserted him in a cavern.",
                          "graphicName": ""
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_7_4_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_7_4_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_4_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "7_4",
                          "trialId": "74301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "How did the Ork escape after being sucked underwater by the whirlpool?",
                          "answer": "He was pulled out of the water by a group of mermaids.",
                          "intervention": "Summarizing",
                          "foil1": "He flew away from the mischievous whirlpool.",
                          "foil2": "The suction of the air drew him from the depths of the sea.",
                          "foil3": "He swam to the safety of a deserted cavern."
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_4_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_4_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "7_4",
                          "trialId": "74302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "How does the summary suggest that the Ork resembles a bird?",
                          "answer": "\"It says that the Ork has wings and a shrill, high-pitched voice.\"",
                          "intervention": "Summarizing",
                          "foil1": "\"it says that the ork is a \"\"special and individual bird.\"\"\"",
                          "foil2": "It states that the Ork dislikes the water and prefers dry land.",
                          "foil3": "It states that the Ork has feathers."
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_4_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_4_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "7_4",
                          "trialId": "74303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"What did the Ork refer to as \"\"an awful pickle\"\"?\"",
                          "answer": "being caught by the whirlpool and sucked underwater",
                          "intervention": "Summarizing",
                          "foil1": "his encounter with a group of mermaids",
                          "foil2": "meeting trot and cap'n bill",
                          "foil3": "his dinner last night"
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_4_3_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_4_3_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "7_4",
                          "trialId": "74304",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"What simpler word was used in the summary instead of the word \"\"bevy\"\"?\"",
                          "answer": "group",
                          "intervention": "Summarizing",
                          "foil1": "rescued",
                          "foil2": "whirlpool",
                          "foil3": "beverage"
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_4_3_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_4_3_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "7_4",
                          "trialId": "74305",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"Why doesn't the summary include the answer to Trot's question, \"\"But what is an Ork?\"\"\"",
                          "answer": "The passage did not explain what an Ork is.",
                          "intervention": "Summarizing",
                          "foil1": "The answer to her question is left out of the summary so that you have to read the whole story.",
                          "foil2": "\"Most people know what an Ork is, so this information is not worth repeating.\"",
                          "foil3": "Summaries shouldn't include information about the characters."
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 80,
                  "override": {
                    "summary": "\"Trot and Cap'n Bill meet a creature called an Ork. The Ork has a shrill, high-pitched voice and wings. He tells Trot and Cap'n Bill about being in an \"\"awful pickle.\"\" The Ork had been caught in a whirlpool and trapped underwater. But, after ten minutes in the water, he was rescued by a group of mermaids.\""
                  }
                }
              ],
              "override": {
                "passageText": [
                  "\"\"\"I wonder,\"\" whispered Trot, \"\"what it is.\"\"\"",
                  "\"\"\"Who, me?\"\" exclaimed the creature in a shrill, high-pitched voice. \"\"Why, I'm an Ork.\"\"\"",
                  "\"\"\"Oh!\"\" said the girl. \"\"But what is an Ork?\"\"\"",
                  "\"\"\"I am,\"\" he repeated, a little proudly, as he shook the water from his funny wings; \"\"and if ever an Ork was glad to be out of the water and on dry land again, you can be mighty sure that I'm that especial, individual Ork!\"\"\"",
                  "\"\"\"Have you been in the water long?\"\" inquired Cap'n Bill, thinking it only polite to show an interest in the strange creature.\"",
                  "\"\"\"Why, this last ducking was about ten minutes, I believe, and that's about nine minutes and sixty seconds too long for comfort,\"\" was the reply. \"\"But last night I was in an awful pickle, I assure you. The whirlpool caught me, and �\"\"\"",
                  "\"\"\"Oh, were you in the whirlpool, too?\"\" asked Trot eagerly.\"",
                  "He gave her a glance that was somewhat reproachful.",
                  "\"\"\"I believe I was mentioning the fact, young lady, when your desire to talk interrupted me,\"\" said the Ork. \"\"I am not usually careless in my actions, but that whirlpool was so busy yesterday that I thought I'd see what mischief it was up to. So I flew a little too near it and the suction of the air drew me down into the depths of the ocean. Water and I are natural enemies, and it would have conquered me this time had not a bevy of pretty mermaids come to my assistance and dragged me away from the whirling water and far up into a cavern, where they deserted me.\"\"\""
                ]
              }
            },
            {
              "id": "B_2_7_5",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_7_5_1",
                  "type": "COWNSStage1",
                  "children": [{
                      "id": "B_2_7_5_1_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_5_1_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "7_5",
                          "trialId": "75101",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"According to the passage, people once thought that the Sun was on fire because it is...\"",
                          "answer": "so bright.",
                          "intervention": "",
                          "foil1": "yellow.",
                          "foil2": "very large.",
                          "foil3": "extremely hot.",
                          "pages": [
                            "\"Our Sun is a star in our solar system. It is the brightest object in the sky, during the day. In fact, it is so bright that you should never look directly at it without using a special kind of eye protection. Regular sunglasses are not enough to protect our sensitive eyes from its blinding brightness.\"",
                            "\"The Sun is so bright that people used to think it was on fire all of the time. We now know that the Sun is not a huge fireball. Actually, it is glowing so brightly because of nuclear fusion reactions that are happening at its center.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_5_1_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_5_1_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "7_5",
                          "trialId": "75102",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "What happens when nuclear fusion takes place in the core of the Sun?",
                          "answer": "\"Several hydrogen atoms join to make one helium atom, and energy is released.\"",
                          "intervention": "",
                          "foil1": "\"A hydrogen atom turns into a helium atom, which produces energy.\"",
                          "foil2": "Hydrogen and helium burn and this process produces energy.",
                          "foil3": "An atom of helium releases energy as it splits into several hydrogen atoms.",
                          "pages": [
                            "\"The center of the Sun is called the core, and this is where nuclear fusion turns hydrogen into helium. Converting one element into another through nuclear fusion requires certain conditions. An element like hydrogen must be present in extremely high density at an extremely high temperature. When these conditions are met, like they are in the core of the Sun, atoms get so close together that their nuclei will fuse.\"",
                            "\"When the centers of the atoms join in this way, a new atom is created. The new atom will be almost as heavy as the combined mass of the original atoms...but not quite. What happens to the little bit of mass that is left over? This mass is converted into energy in the fusion process. The Sun glows because it is constantly releasing this energy.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_5_1_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_5_1_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "7_5",
                          "trialId": "75103",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"According to the passage, why is it impossible to visit the Sun?\"",
                          "answer": "\"It gives off so much heat, that it is too hot to get close to.\"",
                          "intervention": "",
                          "foil1": "\"Our Sun is too far away, but other stars could be visited.\"",
                          "foil2": "\"It gives off dangerous radiation, in addition to light and heat.\"",
                          "foil3": "It would take too much energy to fight the Sun's gravitational pull.",
                          "pages": [
                            "\"Much of the energy released by the Sun is in the form of light and heat. Thus, the Sun is too hot to ever visit. It is so hot that a modern spacecraft couldn't even get close to it. The outer surface of the Sun is about 11,000 degrees Fahrenheit. To give you an idea of just how hot that is, a hot day on Earth can be about 100 degrees Fahrenheit, and the hottest temperature most kitchen ovens reach is 500 degrees Fahrenheit!\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_5_1_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_5_1_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "7_5",
                          "trialId": "75104",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"In the passage, which is the meaning of \"\"mass\"\"?\"",
                          "answer": "the amount of matter in something",
                          "intervention": "",
                          "foil1": "\"a great, but unspecified, quantity of something\"",
                          "foil2": "a collection including many different parts",
                          "foil3": "to gather together",
                          "pages": [
                            "\"In addition to being extremely hot, the Sun is also very large. It contains over ninety percent of all the mass in our solar system. In fact, if the Sun were hollow, approximately a million planets the size of Earth could fit inside of it! Although it is so much larger than the Earth, our Sun is categorized as a yellow dwarf star. This is only medium-sized compared to other stars in our galaxy.\""
                          ]
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_7_5_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_7_5_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_5_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "7_5",
                          "trialId": "75201",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "The Sun is a star in our solar system.",
                          "intervention": "Summarizing",
                          "foil1": "A yellow dwarf is a relatively small star for our solar system.",
                          "foil2": "Viewing the Sun requires sunglasses because it is so bright.",
                          "foil3": "\"The Sun is a huge, burning fireball.\"",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_5_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_5_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "7_5",
                          "trialId": "75202",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "\"It is so bright, people once thought it must be on fire.\"",
                          "intervention": "Summarizing",
                          "foil1": "But the moon is the brightest object in the sky at night.",
                          "foil2": "\"At its center is the \"\"core,\"\" which is 11,000 degrees Fahrenheit.\"",
                          "foil3": "Hydrogen and helium are causing the Sun to grow in size.",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_5_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_5_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "7_5",
                          "trialId": "75203",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "\"Actually, the Sun glows because of nuclear fusion reactions in its core.\"",
                          "intervention": "Summarizing",
                          "foil1": "\"In fact, the Sun glows because it is so hot, just like the inside of a toaster glows red when it is hot.\"",
                          "foil2": "The Sun uses nuclear fusion to produce the fuel for its solar fires.",
                          "foil3": "\"The Sun uses a chemical reaction to turn hydrogen into water, releasing the light that makes it glow.\"",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_5_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_5_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "7_5",
                          "trialId": "75204",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "These reactions convert hydrogen into helium and release energy.",
                          "intervention": "Summarizing",
                          "foil1": "These reactions turn small atoms into large ones and absorb energy.",
                          "foil2": "\"These reactions produce helium, which can be used as a fuel.\"",
                          "foil3": "\"These reactions produce leftover matter, which builds core density.\"",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_5_2_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_5_2_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "7_5",
                          "trialId": "75205",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "Some of that energy is released in the form of light and heat.",
                          "intervention": "Summarizing",
                          "foil1": "All of the energy produced by fusion is absorbed when the atoms divide again.",
                          "foil2": "All of the energy released by nuclear fusion is in the form of dangerous radiation.",
                          "foil3": "Some of that energy causes fusion reactions on Earth.",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_5_2_6",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_5_2_6_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "6",
                          "passageId": "7_5",
                          "trialId": "75206",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "\"As well as being bright and hot, our Sun is extremely large, containing over ninety percent of the total mass of our solar system.\"",
                          "intervention": "Summarizing",
                          "foil1": "\"It may look to us like the brightest, hottest, largest thing around, but our Sun is actually the smallest star in the solar system.\"",
                          "foil2": "\"Our galaxy is medium-sized and has many stars, but the Sun is larger than ninety percent of the other stars.\"",
                          "foil3": "\"In addition to being large and bright, the Sun is so hot that it puts out as much heat as a million ovens on Earth.\"",
                          "graphicName": ""
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_7_5_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_7_5_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_5_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "7_5",
                          "trialId": "75301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"According to the summary, which of these statements is true about the Sun?\"",
                          "answer": "Its glow is caused by nuclear fusion.",
                          "intervention": "Summarizing",
                          "foil1": "It is not a very bright star.",
                          "foil2": "The Earth's core is extremely hot.",
                          "foil3": "It is so bright because of chemical reactions."
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_5_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_5_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "7_5",
                          "trialId": "75302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "The nuclear fusion reactions in the core convert...",
                          "answer": "hydrogen into helium.",
                          "intervention": "Summarizing",
                          "foil1": "stars into suns.",
                          "foil2": "elements into atoms.",
                          "foil3": "energy into matter."
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_5_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_5_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "7_5",
                          "trialId": "75303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Why does the summary include details about the form in which some of the energy is released?",
                          "answer": "Knowing that light and heat are released during the fusion reaction explains why the Sun seems like it is burning.",
                          "intervention": "Summarizing",
                          "foil1": "Knowing that light and heat are released during the fusion reaction is critical to understanding how hydrogen is turned into helium.",
                          "foil2": "Knowing that dangerous forms of radiation are released during the fusion reaction explains why we cannot visit the Sun.",
                          "foil3": "Knowing that dangerous forms of radiation are released during the fusion reaction explains why you shouldn't look at the Sun."
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_5_3_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_5_3_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "7_5",
                          "trialId": "75304",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "Which of the following would be the best title for the passage?",
                          "answer": "the sun and its characteristics",
                          "intervention": "Summarizing",
                          "foil1": "our solar system",
                          "foil2": "principles of nuclear fusion",
                          "foil3": "the celestial fires of the sun"
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_5_3_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_5_3_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "7_5",
                          "trialId": "75305",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"A good summary includes the most important facts from a passage. Which of the following details from the passage would be the best addition, and why?\"",
                          "answer": "\"\"\"The outer surface of the Sun is around 11,000 degrees Fahrenheit.\"\" This fact helps to show how much energy the Sun releases.\"",
                          "intervention": "Summarizing",
                          "foil1": "\" \"\"Looking at the Sun requires eye protection.\"\" This fact is important to include in the summary because it relates to safety.\"",
                          "foil2": "\"\"\"During the day, the Sun is the brightest object in the sky.\"\" This fact is something familiar that people can relate to, so they will enjoy the summary more.\"",
                          "foil3": "\"\"\"Our Sun is medium-sized compared to other stars in our galaxy.\"\" This fact gives the average reader a better sense of how big the Sun is, by comparing it to something familiar.\""
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 80,
                  "override": {
                    "summary": "\"The Sun is a star in our solar system. It is so bright, people once thought it must be on fire. Actually, the Sun glows because of nuclear fusion reactions in its core. These reactions convert hydrogen into helium and release energy. Some of that energy is released in the form of light and heat. As well as being bright and hot, our Sun is extremely large, containing over ninety percent of the total mass of our solar system.\""
                  }
                }
              ],
              "override": {
                "passageText": [
                  "\"Our Sun is a star in our solar system. It is the brightest object in the sky, during the day. In fact, it is so bright that you should never look directly at it without using a special kind of eye protection. Regular sunglasses are not enough to protect our sensitive eyes from its blinding brightness.\"",
                  "\"The Sun is so bright that people used to think it was on fire all of the time. We now know that the Sun is not a huge fireball. Actually, it is glowing so brightly because of nuclear fusion reactions that are happening at its center.\"",
                  "\"The center of the Sun is called the core, and this is where nuclear fusion turns hydrogen into helium. Converting one element into another through nuclear fusion requires certain conditions. An element like hydrogen must be present in extremely high density at an extremely high temperature. When these conditions are met, like they are in the core of the Sun, atoms get so close together that their nuclei will fuse.\"",
                  "\"When the centers of the atoms join in this way, a new atom is created. The new atom will be almost as heavy as the combined mass of the original atoms...but not quite. What happens to the little bit of mass that is left over? This mass is converted into energy in the fusion process. The Sun glows because it is constantly releasing this energy.\"",
                  "\"Much of the energy released by the Sun is in the form of light and heat. Thus, the Sun is too hot to ever visit. It is so hot that a modern spacecraft couldn't even get close to it. The outer surface of the Sun is about 11,000 degrees Fahrenheit. To give you an idea of just how hot that is, a hot day on Earth can be about 100 degrees Fahrenheit, and the hottest temperature most kitchen ovens reach is 500 degrees Fahrenheit!\"",
                  "\"In addition to being extremely hot, the Sun is also very large. It contains over ninety percent of all the mass in our solar system. In fact, if the Sun were hollow, approximately a million planets the size of Earth could fit inside of it! Although it is so much larger than the Earth, our Sun is categorized as a yellow dwarf star. This is only medium-sized compared to other stars in our galaxy.\""
                ]
              }
            },
            {
              "id": "B_2_7_6",
              "type": "COWNSPassage",
              "children": [{
                  "id": "B_2_7_6_1",
                  "type": "COWNSStage1",
                  "children": [{
                      "id": "B_2_7_6_1_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_6_1_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "7_6",
                          "trialId": "76101",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"What does the word \"\"contract\"\" mean in this passage?\"",
                          "answer": "to become smaller",
                          "intervention": "",
                          "foil1": "a written agreement",
                          "foil2": "to catch a disease",
                          "foil3": "a friend or associate",
                          "pages": [
                            "\"Most people believe that chameleons change color to match their surroundings. In fact, chameleons' bodies are constantly changing colors according to the weather and their mood.\"",
                            "\"A chameleon is a kind of lizard that can change the color of its body because of special cells, located under the surface of its thin and transparent skin. These cells come in five colors: yellow, red, blue, white, and brown. External heat (weather) and internal chemicals (mood) cause these cells to expand and contract. If all the brown cells expand, and all the other cells contract, the chameleon will appear to be brown.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_6_1_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_6_1_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "7_6",
                          "trialId": "76102",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "\"The passage discusses one reason that a chameleon would turn its body dark, what was that reason?\"",
                          "answer": "It is trying to soak up more of the sun's warmth.",
                          "intervention": "",
                          "foil1": "\"It is in a dark mood, and is communicating that to the other chameleons.\"",
                          "foil2": "It is hiding from predators in a dark place.",
                          "foil3": "\"It is resting on a dark surface, and wants to be unseen by prey.\"",
                          "pages": [
                            "Color changes provide a form of communication among chameleons. A chameleon's color helps to show whether it is wooing another chameleon or defending its territory. ",
                            "\"The ability to change colors also helps chameleons to control their body temperature. Chameleons are cold-blooded creatures that rely on the Sun to heat their bodies. Dark colors absorb more sunlight than light colors, so a chameleon that needs to warm up will turn dark.\""
                          ]
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_6_1_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_6_1_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "7_6",
                          "trialId": "76103",
                          "stageType": "PreStrat",
                          "taskType": "CompQuest",
                          "questionType": "",
                          "stage": 1,
                          "graphicName": "",
                          "question": "What do chameleons rely on for hunting their prey?",
                          "answer": "\"The chameleon relies on its rotating eyes and its long, sticky, fast-moving tongue to spot and catch prey.\"",
                          "intervention": "",
                          "foil1": "The chameleon relies on disguising itself like a leaf so that prey wanders close enough to be caught with its five inch long tongue.",
                          "foil2": "\"The chameleon relies on its color changing ability and its independently moving eyes to remain undetected by prey, competitors, and predators.\"",
                          "foil3": "\"The chameleon relies on its ability to race up trees and catch prey in its quick, powerful jaws.\"",
                          "pages": [
                            "\"Once a chameleon is warm enough, it is ready to hunt. Chameleons mostly eat insects, along with the occasional leaf or small bird. They catch their prey with their long, sticky tongues. A chameleon's body is only around five inches long, and chameleons get around pretty slowly. In contrast, a chameleon's tongue can shoot out to the length of a foot, moving at a rate of 16 feet per second.\"",
                            "But chameleons are not only predators; they are also prey for snakes and some types of birds. Chameleons live in trees and they sort of resemble leaves. This allows them to hide from their predators. The chameleons' ability to rotate each eye independently allows them to watch out for predators and prey more efficiently."
                          ]
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_7_6_2",
                  "type": "COWNSStage2",
                  "children": [{
                      "id": "B_2_7_6_2_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_6_2_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "7_6",
                          "trialId": "76201",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "A chameleon is a lizard that can change the color of its body according to the weather and its mood.",
                          "intervention": "Summarizing",
                          "foil1": "The chameleon is a fast moving lizard that uses the element of surprise to prey on other lizards.",
                          "foil2": "\"A chameleon is a lizard that uses body language, including body color and different postures, to communicate with its own kind.\"",
                          "foil3": "\"The chameleon is the master of disguise in the lizard world, using its color changing ability to blend into any surface.\"",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_6_2_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_6_2_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "7_6",
                          "trialId": "76202",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "It can change color by contracting and expanding colored cells under its transparent skin.",
                          "intervention": "Summarizing",
                          "foil1": "\"People's faces turn red when they're embarrassed, and they turn green when they feel sick, just like chameleons.\"",
                          "foil2": "They change color to match their surroundings by contracting and expanding colored cells under the surface of their transparent skin.",
                          "foil3": "The weather and the chameleon's mood determine the color of its body.",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_6_2_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_6_2_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "7_6",
                          "trialId": "76203",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "Chameleons use this ability to communicate and control their body temperature.",
                          "intervention": "Summarizing",
                          "foil1": "This requires them to lie in the sun when they're cold.",
                          "foil2": "\"Sunlight will bounce of light-colored surface, so it will stay cooler than a dark one.\"",
                          "foil3": "\"Chameleons are cold-blooded lizards, but they express their moods by changing color.\"",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_6_2_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_6_2_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "7_6",
                          "trialId": "76204",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "A chameleon uses its long and sticky tongue to catch insects.",
                          "intervention": "Summarizing",
                          "foil1": "\"Chameleons look like leaves, and occasionally eat them, too.\"",
                          "foil2": "Chameleons are only five inches long and they hunt insects and birds up to a foot long.",
                          "foil3": "\"A chameleon can grow up to a foot long, with a 16-inch long tongue.\"",
                          "graphicName": ""
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_6_2_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_6_2_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "7_6",
                          "trialId": "76205",
                          "stageType": "Strategy",
                          "taskType": "BuildSumm",
                          "questionType": "",
                          "stage": 2,
                          "answer": "Their resemblance to leaves on tree branches helps chameleons hide from predators.",
                          "intervention": "Summarizing",
                          "foil1": "\"Because they look so much like leaves on tree branches, chameleons are not concerned with predators.\"",
                          "foil2": "Chameleons try to hide from their prey while they hunt for their predators.",
                          "foil3": "\"Their predators can also be their prey, depending on who is seen first.\"",
                          "graphicName": ""
                        }
                      }]
                    }
                  ]
                },
                {
                  "id": "B_2_7_6_3",
                  "type": "COWNSStage3",
                  "children": [{
                      "id": "B_2_7_6_3_1",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_6_3_1_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "1",
                          "passageId": "7_6",
                          "trialId": "76301",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"According to the summary, what is the relationship between a chameleon's body color and the weather?\"",
                          "answer": "One of the tools a chameleon has for controlling its body temperature is its ability to change color.",
                          "intervention": "Summarizing",
                          "foil1": "\"When the weather is hot, chameleons turn dark from sitting in the sun.\"",
                          "foil2": "Changes in the weather always cause chameleons to change color.",
                          "foil3": "\"When a chameleon's body is cold, it grows pale so that it can absorb more sunlight.\""
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_6_3_2",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_6_3_2_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "2",
                          "passageId": "7_6",
                          "trialId": "76302",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"When a chameleon turns green, how have its color cells adjusted?\"",
                          "answer": "\"Its yellow and blue cells have expanded, and its red, white, and brown cells have contracted.\"",
                          "intervention": "Summarizing",
                          "foil1": "\"Its color cells have expanded and its skin has become transparent, so that the green shows through.\"",
                          "foil2": "Its color cells have contracted so that its normally green skin tone shows.",
                          "foil3": "The cells have changed color to match the surface of the leaf that the chameleon is sitting on."
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_6_3_3",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_6_3_3_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "3",
                          "passageId": "7_6",
                          "trialId": "76303",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"According to this passage, which of the following does not affect a chameleon's body color?\"",
                          "answer": "the color of a chameleon's surroundings",
                          "intervention": "Summarizing",
                          "foil1": "a chameleon's mood",
                          "foil2": "the temperature of a chameleon's environment",
                          "foil3": "social interactions"
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_6_3_4",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_6_3_4_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "4",
                          "passageId": "7_6",
                          "trialId": "76304",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "hard",
                          "stage": 3,
                          "graphicName": "",
                          "question": "\"According to the passage, a chameleon's mood can cause it to change color. What is the most plausible example of this?\"",
                          "answer": "\"A chameleon sees another chameleon trespassing on its territory, and changes color as it angrily chases away the intruder.\"",
                          "intervention": "Summarizing",
                          "foil1": "\"A chameleon sees a predator and is anxious about being seen, so it changes color to match its surroundings.\"",
                          "foil2": "\"A chameleon falls off a branch in front of a group of other chameleons, so it turns red in embarrassment.\"",
                          "foil3": "\"A chameleon suns itself on a branch far from any other chameleons, and it turns a dark color because it feels relaxed and content.\""
                        }
                      }]
                    },
                    {
                      "id": "B_2_7_6_3_5",
                      "type": "DNWrapper",
                      "children": [{
                        "id": "B_2_7_6_3_5_D",
                        "type": "DataNode",
                        "data": {
                          "viewID": "com.scilearn.DataStream.NormalMechanic",
                          "item": "5",
                          "passageId": "7_6",
                          "trialId": "76305",
                          "stageType": "PostStrat",
                          "taskType": "CompQuest",
                          "questionType": "easy",
                          "stage": 3,
                          "graphicName": "",
                          "question": "How does a chameleon protect itself from predators?",
                          "answer": "by sitting on a tree branch and pretending to be a leaf ",
                          "intervention": "Summarizing",
                          "foil1": "by adjusting the color of its body to match its surroundings ",
                          "foil2": "by using its long and sticky tongue to fight off predators ",
                          "foil3": "by staying low to the ground and hiding under rocks "
                        }
                      }]
                    }
                  ],
                  "percentCorrect": 80,
                  "override": {
                    "summary": "A chameleon is a lizard that can change the color of its body according to the weather and its mood. It can change color by contracting and expanding colored cells under its transparent skin. Chameleons use this ability to communicate and control their body temperature. A chameleon uses its long and sticky tongue to catch insects. Their resemblance to leaves on tree branches helps chameleons hide from predators."
                  }
                }
              ],
              "override": {
                "passageText": [
                  "\"Most people believe that chameleons change color to match their surroundings. In fact, chameleons' bodies are constantly changing colors according to the weather and their mood.\"",
                  "\"A chameleon is a kind of lizard that can change the color of its body because of special cells, located under the surface of its thin and transparent skin. These cells come in five colors: yellow, red, blue, white, and brown. External heat (weather) and internal chemicals (mood) cause these cells to expand and contract. If all the brown cells expand, and all the other cells contract, the chameleon will appear to be brown.\"",
                  "Color changes provide a form of communication among chameleons. A chameleon's color helps to show whether it is wooing another chameleon or defending its territory. ",
                  "\"The ability to change colors also helps chameleons to control their body temperature. Chameleons are cold-blooded creatures that rely on the Sun to heat their bodies. Dark colors absorb more sunlight than light colors, so a chameleon that needs to warm up will turn dark.\"",
                  "\"Once a chameleon is warm enough, it is ready to hunt. Chameleons mostly eat insects, along with the occasional leaf or small bird. They catch their prey with their long, sticky tongues. A chameleon's body is only around five inches long, and chameleons get around pretty slowly. In contrast, a chameleon's tongue can shoot out to the length of a foot, moving at a rate of 16 feet per second.\"",
                  "But chameleons are not only predators; they are also prey for snakes and some types of birds. Chameleons live in trees and they sort of resemble leaves. This allows them to hide from their predators. The chameleons' ability to rotate each eye independently allows them to watch out for predators and prey more efficiently."
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "id": "B_3",
      "type": "DNWrapper",
      "guard": "(${GamePlayComplete})",
      "children": [{
        "id": "B_3_1",
        "type": "DataNode",
        "data": {
          "viewID": "com.scilearn.DataStream.GameOver",
          "trialId": "1101",
          "passageId": "0_1",
          "page": [
            "\"Some people keep birds as pets, and lots of people have pet cats. But I think that dogs make the best pets. My favorite kind of dog is the poodle.\""
          ],
          "taskType": "Read",
          "gameOver": true
        }
      }]
    }
  ]
}]


export {
  data
};