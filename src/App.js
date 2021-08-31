import React, { Component } from 'react'
import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

// slicer 1

let basicFilter = {
  $schema: "http://powerbi.com/product/schema#basic",
  target: {
    table: 'Cost Element',
    column: 'Cost Element Group'
  },
  operator: "In",
  values: ['Labor'],
  filterType: models.FilterType.BasicFilter,
  requireSingleSelection: true
}

let slicers1 =
{
  selector: {
    $schema: "http://powerbi.com/product/schema#slicerTargetSelector",
    target: {
      table: 'Cost Element',
      column: 'Cost Element Group'
    }
  },
  state: {
    filters: [basicFilter,],
  }
};

// silece2

let basicFilter2 = {
  $schema: "http://powerbi.com/product/schema#basic",
  target: {
    table: 'IT Area',
    column: 'IT Area'
  },
  operator: "In",
  values: ['Functional'],
  filterType: models.FilterType.BasicFilter,
  requireSingleSelection: true
}

let slicers2 =
{
  selector: {
    $schema: "http://powerbi.com/product/schema#slicerTargetSelector",
    target: {
      table: 'IT Area',
      column: 'IT Area'
    }
  },
  state: {
    filters: [basicFilter2],
  }
};

// slicer 3

let basicFilter3 = {
  $schema: "http://powerbi.com/product/schema#basic",
  target: {
    table: 'IT Area',
    column: 'IT Sub Area'
  },
  operator: "In",
  values: ['R1'],
  filterType: models.FilterType.BasicFilter,
  requireSingleSelection: true
}

let slicers3 =
{
  selector: {
    $schema: "http://powerbi.com/product/schema#slicerTargetSelector",
    target: {
      table: 'IT Area',
      column: 'IT Sub Area'
    }
  },
  state: {
    filters: [basicFilter3],
  }
};



export class App extends Component {
  render() {
    return (
      <div>

        <PowerBIEmbed
          embedConfig={{
            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
            id: "33e5e2fb-75fe-41dd-b7d3-efc7a933c1ac",
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=33e5e2fb-75fe-41dd-b7d3-efc7a933c1ac&groupId=a8af59d1-1fa9-47b8-8909-c16713ba73f0&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwiY2VydGlmaWVkVGVsZW1ldHJ5RW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d",
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNTFjMDI4MmItZjQ1YS00ZTNhLThiZWEtNzEwNWZmYTg4ZjExLyIsImlhdCI6MTYzMDM5OTA5MCwibmJmIjoxNjMwMzk5MDkwLCJleHAiOjE2MzA0MDI5OTAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUF2V291VDBQZEtsdzVwdFF5aWVCajBkTGZacW1xcVBPbk5GNGhWelA2RGRFbUp1RDZSUktWRzJRMzBFRVdyVVRSIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiZW1iZWRkZWQiLCJnaXZlbl9uYW1lIjoicGJpIiwiaXBhZGRyIjoiMTc1LjEwMS4xMDguMTU4IiwibmFtZSI6IlBCSUVNQkVEREVEIiwib2lkIjoiNzEwZjNkYmMtMGM4OS00NjE5LWJiNmEtZDFkYTM5MWRkZmEyIiwicHVpZCI6IjEwMDMyMDAxNzEzQzE0NzQiLCJyaCI6IjAuQVhBQUt5akFVVnIwT2s2TDZuRUZfNmlQRVE4QkhJZGhYckZQZzZ5WVlRcC1rUkJ3QUFJLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IkZ0Sk5FNC1lRDRwNDMtbE9xOHhnVG40aWwtRXZxNEwzNy1aUlRSNS13NkUiLCJ0aWQiOiI1MWMwMjgyYi1mNDVhLTRlM2EtOGJlYS03MTA1ZmZhODhmMTEiLCJ1bmlxdWVfbmFtZSI6InBiaWVtYmVkZGVkQGRlbW9kb21haW4yNTYxLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6InBiaWVtYmVkZGVkQGRlbW9kb21haW4yNTYxLm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6Ik1MOXRRUTVRNzB5Q1FxMnAzVkM0QUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.K348JJdQZgt34uusdOE_QK10VSkYZfz1vmwAX49cFZBho8gVnZgMMd8A0BqZn__iIoa4i_-P4bYu8cFp0JMPifD4gpn_wzHsKLGVEJR9y0ULLMuG7jHLQoUoWf424qUSEBFcGqvHwcNxku2hNw2xW1S3yA-wO2hODyF9nLR0T7gvzd0k7i0yy02sQnzvbIyjilBx9JmzJtftMZ_Vea26kzS5PkX1xXO7bn5ARi_6tqYFWC5BwAHzXHACcKXeI1d5A9YBs_8D83Q9nmxdcrVtFstcE6KgvxSlkJIj3RGadda4BrGymI0cOh79y_YOc3GJ2hLE_gvm9SmmxrypDyACnw',
            tokenType: models.TokenType.Aad,
            settings: {
              filterPaneEnabled: false,
              bars: {
                actionBar: {
                  visible: false
                }
              },
              panes: {
                filters: {
                  expanded: false,
                  visible: false
                },
                syncSlicers: {
                  visible: false
                },
                localeSettings: {
                  language: "en",
                  formatLocale: "es"
                },
                visualizations: {
                  expanded: false
                },
              },
              background: models.BackgroundType.Transparent,
            },
            // filters: [basicFilter],
            slicers: [slicers1, slicers2, slicers3],
            // slicers:

          }}

          eventHandlers={
            new Map([
              ['loaded', function () { }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }]
            ])
          }

          cssClassName={"embed-container"}

          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}

        />
      </div>
    )
  }
}

export default App
