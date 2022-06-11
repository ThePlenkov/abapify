import OpenAPItoABAP from './abapgen-openapi';
import { abapgen } from '@abapify/abapgen';

test('Load and parse petstore model', async () => {
  const parser = await OpenAPItoABAP.load(
    'https://petstore3.swagger.io/api/v3/openapi.json'
  );
  parser.parse();
  console.log(
    abapgen(parser.get_interface({ interface_name: 'lif_petstore' }))
  );
});