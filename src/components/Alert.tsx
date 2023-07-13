// 快捷输入 rafce (React Arrow Function Component)
import React, { ReactNode } from 'react';
interface Props {
	// 如果传递的是一个节点，则需要使用 ReactNode
	children: ReactNode;
}
const Alert = ({ children }: Props) => {
	return <div className='alert alert-primary'>{children}</div>;
};

export default Alert;
