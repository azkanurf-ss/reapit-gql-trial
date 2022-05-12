/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { FC } from 'react'
import { PageContainer } from '@reapit/elements'
import { reapitConnectBrowserSession } from '../../core/connect-session'
import { useReapitConnect } from '@reapit/connect-session'
import { InputGroup, Input, Label, Button } from '@reapit/elements'
import { useFormik } from 'formik'
import * as Yup from 'yup'

// import { useGetAllOfficeNameQuery } from '../../generated/graphql'
// import graphQLRequestClient from '../../platform-api/graphqlClient'
import { useGetOffice } from '../../platform-api/hooks/useOffice'

export const HomePage: FC = () => {
  const { connectSession } = useReapitConnect(reapitConnectBrowserSession)
  // const officeData = useGetOffice(connectSession, { pageSize: 80, pageNumber: 1 })
  // console.log({ officeData })

  const formik = useFormik({
    initialValues: {
      title: '',
      forename: '',
      surname: '',
      dob: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log('halo', { values })
      alert(JSON.stringify(values, null, 2))
    },
    validationSchema: Yup.object({
      // name: Yup.string().min(2, 'Mininum 2 characters').max(15, 'Maximum 15 characters'),
      // address: Yup.string().required('Required!'),
    }),
  })

  // const officeName = useGetAllOfficeNameQuery(graphQLRequestClient)
  // console.log({ officeName })
  // useEffect(() => {
  //   if (!connectSession) return
  //   graphQLRequestClient.setHeaders({
  //     // ...BASE_HEADERS,
  //     authorization: connectSession.idToken,
  //     'reapit-connect-token': connectSession.accessToken,
  //   })
  // }, [connectSession])

  return (
    <PageContainer>
      <form onSubmit={formik.handleSubmit}>
        <div className="el-mt8 el-flex el-flex-row el-flex-wrap">
          <InputGroup>
            <Input
              id="title"
              type="text"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Label htmlFor="name">Title</Label>
          </InputGroup>
          <InputGroup className="el-ml6">
            <Input
              id="forename"
              type="text"
              value={formik.values.forename}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Label htmlFor="name">Forename</Label>
          </InputGroup>
          <InputGroup className="el-ml6">
            <Input
              id="surname"
              type="text"
              value={formik.values.surname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Label htmlFor="name">Surname</Label>
          </InputGroup>
        </div>
        <div className="el-mt8 el-flex el-flex-row el-flex-wrap">
          <InputGroup>
            <Input
              id="dob"
              type="date"
              value={formik.values.dob}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Label htmlFor="name">Date Of Birth</Label>
          </InputGroup>
          <InputGroup className="el-ml6">
            <Input
              id="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Label htmlFor="name">Email</Label>
          </InputGroup>
        </div>
        <Button className="el-mt6" intent="primary" type="submit">
          Save
        </Button>
      </form>
    </PageContainer>
  )
}

export default HomePage
