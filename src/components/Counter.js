import React from "react"
import { Button, Space } from 'antd'
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons'
import { green } from '@ant-design/colors'
import { red } from '@ant-design/colors'
import { Row,Col } from 'antd'


class Counter extends React.Component {
      render() {
          console.log(this.props)
        return (
          <Row> 
            <Col span={12} offset={6}>
                <div className="space-align-block">
                    <Button onClick={this.props.substract} type="primary" style={{backgroundColor: red[6]}} shape="circle" icon={<MinusCircleOutlined />} ></Button>
                    <Space/> <Space />
                    <Button onClick={this.props.increment} type="primary" style={{backgroundColor: green[6]}} shape="circle" icon={<PlusCircleOutlined />} ></Button>
                </div>
                <h2> {this.props.count} </h2>
            </Col>
          </Row>
  
            
        );
      }
  
  }
  
  
  export default Counter;