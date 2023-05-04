import mongoose from 'mongoose'
import Book from '../models/Book.js'
import asyncHandler from '../middlewares/asyncHandler.js'
import { customAPIError } from '../errors/customAPIError.js'

const getAllBooks = asyncHandler( async (req, res, next) => {
    const books = await Book.find({})

    if (!books) {
        return next(customAPIError(`Books not found`, 404))
        res.status(404).json({ message: `Books not found` })
    }

    res.status(200).json(books)
})

const getBook = asyncHandler( async (req, res, next) => {
    const book = await Book.findById(req.params.id)

    if (!book) {
        return next(customAPIError(`No book with ID: ${req.params.id}`, 404))
    }

    res.status(200).json(book)
})

const createBook = asyncHandler( async (req, res, next) => {
    const book = await Book.create(req.body)
    res.status(201).json(book)
})

const updateBook = asyncHandler( async (req, res, next) => {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    })

    if (!book) {
        return next(customAPIError(`No book with ID: ${req.params.id}`, 404))
    }

    res.status(200).json(book)
})

const deleteBook = asyncHandler( async (req, res, next) => {
    const book = await Book.findByIdAndDelete(req.params.id)

    if(!book) {
        return next(customAPIError(`No book with ID: ${req.params.id}`, 404))
    }

    res.status(200).json({ deleted: true, data: book })
})

export {
    getAllBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook,
}