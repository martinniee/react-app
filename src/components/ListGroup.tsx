import { Fragment, useState } from 'react';
interface Props {
	items: string[];
	heading: string;
	onSelectItem: (item: string) => void;
}
/**
 *
 * @param param0
 * items 列表项
 * heading 标题
 * @returns
 */
function ListGroup({ items, heading, onSelectItem }: Props) {
	/**
	 * 创建 react 状态管理
	 * useState(...) 返回数组，长度为2
	 * arr[0] 第一个元素为状态（数据）
	 * arr[1] 第二个元素为更新状态的函数引用
	 */
	const [selectedIndex, setSelectedIndex] = useState(-1);
	return (
		<Fragment>
			<h1>{heading}</h1>
			{items.length === 0 && <p>No item found</p>}
			<ul className='list-group'>
				{items.map((item, index) => (
					<li
						className={
							selectedIndex === index
								? 'list-group-item active'
								: 'list-group-item'
						}
						key={item}
						onClick={() => {
							setSelectedIndex(index);
							onSelectItem(item);
						}}
					>
						{item}
					</li>
				))}
			</ul>
		</Fragment>
	);
}
export default ListGroup;
