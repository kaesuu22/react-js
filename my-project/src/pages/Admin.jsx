import React, { Component } from 'react'

export class Admin extends Component {
  render() {
    return (
        <main className="flex-1 bg-gray-100 p-8">
            <h2 className="text-2xl font-semibold text-center justify-center mb-4">Admin Portal</h2>
            <p className='text-center'>This is the main content area of the Admin.</p>
        </main>
    )
  }
}

export default Admin