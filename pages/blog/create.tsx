import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Head from 'next/head'
import Layout from '../../components/Layout'

const CreatePost: NextPage = () => {
  return <>
    <Layout title="Create Post - Maxwell Yu">
      <div className="mx-5 my-3">
        <h1 className='text-center m-4'>Create a post</h1>
        <Form>
          <Form.Group className='mb-3' controlId='title'>
            <Form.Label>Title</Form.Label>
            <Form.Control type='text' />
          </Form.Group>
          
          {/*
          <Form.Group className='mb-3' controlId='description'>
            <Form.Label>Brief Description</Form.Label>
            <Form.Control as='textarea' rows={2} />
          </Form.Group>
          */}

          <Form.Group className='mb-3' controlId='content'>
            <Form.Label>Content</Form.Label>
            <Form.Control as='textarea' rows={5} />
          </Form.Group>

          <Button variant="dark" type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </Layout>
  </>
}

export default CreatePost
