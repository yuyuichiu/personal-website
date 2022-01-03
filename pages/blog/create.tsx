import type { NextPage } from 'next'
import { useState, useEffect, useContext } from 'react';
import { Form, Button, Modal, FloatingLabel, Collapse } from 'react-bootstrap'
import Layout from '../../components/Layout'
import { useForm } from "react-hook-form";
import Link from 'next/link';
import Router from 'next/router'
import ReactMarkdown from "react-markdown"
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'
import AuthContext from '../../context/authContext';
import cookie from 'js-cookie'

interface BlogPost {
  title: string,
  image: Array<any>,
  body: string,
  tags: string[]
}

const CreatePost: NextPage = () => {
  const authCtx = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(true);
  const [bodyText, setBodyText] = useState('');
  const [fileTooLarge, setFileTooLarge] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    if(!authCtx.isAuthenticated) { Router.push('/login') }
  }, [authCtx])

  const onSubmit = (data: BlogPost) => {
    try{
      setLoading(true);
      setFileTooLarge(false);
      if(data.image[0].size >= 1048576){
        setFileTooLarge(true);
        setLoading(false);
        return console.log('File is too large');
      } else {
        const formData = new FormData
        formData.append('image', data.image[0]);
        formData.append('title', data.title);
        formData.append('body', data.body);
        formData.append('author', authCtx.username!);
        formData.append('tags', JSON.stringify(['tag01']));
  
        fetch('https://maxwellyu-blog.herokuapp.com/api/articles', {
          method: 'POST',
          headers: { 'authentication': `${cookie.get('token')}` },
          body: formData
        }).then((res) => {
          if (res.ok) {
            setShow(true);
            setTimeout(() => Router.push('/blog'), 2000);
          } else { console.log('Request ended with an error') }
          setLoading(false);
        })
      }
    } catch(err) {
      setLoading(false);
      console.log(err);
    }
  }

  return <>
    <Layout title="Create Post - Maxwell Yu">
      <div className="mx-2 my-3">
        <h1 className='text-center m-4'>Create a post</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className='mb-3' controlId='title'>
            <FloatingLabel label='Title' className='text-secondary'>
              <Form.Control
                isInvalid={errors.title}
                disabled={loading}
                placeholder=''
                type='text'
                {...register("title", { max: 150, required: true })}
              />
            </FloatingLabel>
            {errors.title && <Form.Text className='text-danger'>This field is required</Form.Text>}
          </Form.Group>

          <Form.Group className='mb-3' controlId='image'>
            <Form.Label>Preview Image {`(< 1MB)`}</Form.Label>
            <Form.Control
              isInvalid={errors.image}
              disabled={loading}
              type="file"
              accept="image/*" {...register("image", { required: true })}
            />
            {errors.image && <Form.Text className='text-danger'>This field is required</Form.Text>}
            {fileTooLarge && <Form.Text className='text-danger'>File size exceeds limit of 1MB.</Form.Text>}
          </Form.Group>

          <Form.Group className='mb-3' controlId='body'>
            <Form.Label className='me-2'>Body</Form.Label>
            <small className='text-secondary'>Enter twice for linebreak | **bold** | *italic* | - list </small>
            <Form.Control
              isInvalid={errors.content}
              disabled={loading}
              as='textarea'
              rows={5}
              placeholder='Markdown Syntax Applicable'
              {...register("body", { required: true })}
              onChange={(e) => setBodyText(e.target.value)}
            />
            {errors.content && <Form.Text className='text-danger'>This field is required</Form.Text>}
          </Form.Group>
          
          {/* Text Preview */}
          <Form.Group className='my-3'>
            {open && <BsFillEyeFill onClick={() => setOpen(!open)}/>}
            {!open && <BsFillEyeSlashFill onClick={() => setOpen(!open)}/>}
            <Form.Label className='ms-2' onClick={() => setOpen(!open)}>Preview</Form.Label>
            <Collapse in={open} dimension='height'>
              <div className={`${bodyText ? 'border border-secondary rounded px-2' : ''}`}>
                <ReactMarkdown>{`${bodyText}`}</ReactMarkdown>
              </div>
            </Collapse>
          </Form.Group>

          <Button variant="dark" type='submit'>
            {loading ? 'Loading...' : 'Submit'}
          </Button>
          <Link href="/blog">
            <Button variant="" type='button'>
              Back
            </Button>
          </Link>
        </Form>

        {/* Modal to show on successful submit */}
        <Modal show={show} centered>
          <Modal.Header closeButton>
            <Modal.Title>Post Created!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Post created successfully. You will be redirected soon...</Modal.Body>
          <Modal.Footer>
            <Button variant='dark' onClick={() => Router.push('/blog')}>Got it!</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Layout>
  </>
}

export default CreatePost
