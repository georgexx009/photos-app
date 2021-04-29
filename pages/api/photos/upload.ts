import micro from 'micro'
import formidable from 'formidable'

async function endpoint(req, res) {
  
	const data = await new Promise(function (resolve, reject) {
		const form = new formidable.IncomingForm({ keepExtensions: true });
		form.parse(req, function (err, fields, files) {
			if (err) return reject(err);
			resolve({ fields, files });
		});
	});

	console.log(data)
	res.send('true')
}
  
export const config = {
  api: {
    bodyParser: false,
  },
};
export default micro(endpoint)