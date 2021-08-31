(function($) {
  $(function() {
   var westData = {
     'name': 'warriors',
     'wins': '3',
     'children': [
       { 'name': 'warriors', 'wins': '4',
         'children': [
           { 'name': 'warriors', 'wins': '4',
             'children': [
               { 'name': 'warriors', 'wins': '4' },
               { 'name': 'rockets', 'wins': '1' }
             ]
           },
           { 'name': 'blazers', 'wins': '1',
             'children': [
               { 'name': 'clippers', 'wins': '2' },
               { 'name': 'blazers', 'wins': '4' }
             ]
           }
         ]
       },
       { 'name': 'thunders', 'wins': '3',
         'children': [
           { 'name': 'spurs', 'wins': '2',
             'children': [
               { 'name': 'spurs', 'wins': '4' },
               { 'name': 'grizzlies', 'wins': '0' }
             ]
           },
           { 'name': 'thunders', 'wins': '4',
             'children': [
               { 'name': 'thunders', 'wins': '4' },
               { 'name': 'mavericks', 'wins': '1' }
             ]
            }
          ]
        }
      ]
    };

    var ocWest = $('#chart-western').orgchart({
      'data' : westData,
      'nodeContent': 'wins',
      'direction': 'r2l',
      'createNode': function($node, data) {
        $node.children('.title').html('<img src="https://dabeng.github.io/OrgChart/img/2016nba/' + data.name + '.jpg" widht="100%" height="100%">');
      }
    });
    
   var eastData = {
     'name': 'cavaliers',
     'wins': '4',
     'children': [
       { 'name': 'cavaliers', 'wins': '4',
         'children': [
           { 'name': 'cavaliers', 'wins': '4',
             'children': [
               { 'name': 'cavaliers', 'wins': '4' },
               { 'name': 'pistons', 'wins': '0' }
             ]
           },
           { 'name': 'hawks', 'wins': '2',
             'children': [
               { 'name': 'hawks', 'wins': '4' },
               { 'name': 'celtics', 'wins': '2' }
             ]
           }
         ]
       },
       { 'name': 'raptors', 'wins': '2',
         'children': [
           { 'name': 'raptors', 'wins': '4',
             'children': [
               { 'name': 'raptors', 'wins': '4' },
               { 'name': 'pacers', 'wins': '3' }
             ]
           },
           { 'name': 'heat', 'wins': '3',
             'children': [
               { 'name': 'heat', 'wins': '4' },
               { 'name': 'hornets', 'wins': '3' }
             ]
            }
          ]
        }
      ]
    };

    var ocEast = $('#chart-eastern').orgchart({
      'data' : eastData,
      'nodeContent': 'wins',
      'direction': 'l2r',
      'createNode': function($node, data) {
        $node.children('.title').html('<img src="https://dabeng.github.io/OrgChart/img/2016nba/' + data.name + '.jpg" widht="100%" height="100%">');
      }
    });

  });
})(jQuery);