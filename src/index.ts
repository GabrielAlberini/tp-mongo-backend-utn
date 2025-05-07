// crear la conexión y luego para crear el modelo
import { Schema, model, connect } from "mongoose"

process.loadEnvFile()

const URI_DB = process.env.URI_DB || ""

const connectMongoDb = async () => {
  try {
    await connect(URI_DB)
    console.log("✅ Conectado a MongoDB")
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB')
  }
}

interface IFilm {
  title: string
  year: number
  rating: number
  gender: string
}

const filmSchema = new Schema({
  title: { type: String, required: true, unique: true },
  year: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  gender: { type: String, required: true }
}, {
  versionKey: false
})

const Film = model("Film", filmSchema)

// Crear un nuevo documento en la base de datos.
const addNewFilm = async (newFilm: IFilm) => {
  try {
    const { title, year, rating, gender } = newFilm
    if (!title || !year || !rating || !gender) {
      return { success: false, error: "invalid data" }
    }

    const newFileToDb = new Film({ title, year, rating, gender })
    await newFileToDb.save()
    return {
      success: true,
      data: newFileToDb,
      message: "movie added successfully"
    }
  } catch (error: any) {
    return { success: false, error: error.message }
  }
}

// Obtener todos los documentos de la colección.
const getFilms = async () => {
  try {

  } catch (error) {

  }
}

// Obtener un documento por su ID.
const getFilm = async (id: string) => {
  try {

  } catch (error) {

  }
}

// Actualizar un documento existente.
const updateFilm = async (id: string) => {
  try {

  } catch (error) {

  }
}

// Eliminar un documento por su ID.
const deleteFilm = async (id: string) => {
  try {

  } catch (error) {

  }
}


const main = async () => {
  connectMongoDb()

  const savedFilm = await addNewFilm({ title: "El Menú", year: 2022, rating: 7.2, gender: "acción" })

  console.log(savedFilm)
}

main()
