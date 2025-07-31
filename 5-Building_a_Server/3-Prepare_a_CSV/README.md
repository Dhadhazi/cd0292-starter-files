# Instructions

You will create an API that processes a CSV file (users.csv) and turns it into a JSON file upon visiting the endpoint /convert. Additionally, any phone number that is missing should be filled in with the string, "missing data".

Use the [csvtojson](https://www.npmjs.com/package/csvtojson) node module as a library to do the conversion.