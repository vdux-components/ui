/**
 * Imports
 */


import {component, decodeRaw, element, Window} from 'vdux'
import Block from './Block'

/**
 * Slider
 */

export default component ({
	initialState ({props}) {
		const {min = 0, max = 10, startValue} = props

		return {
			value: valToPercent(startValue || min, min, max),
			active: false
		}
	},
	render ({props, state, actions, path}) {
		const {barProps = {}, handleProps = {}, progressProps = {}, ...rest} = props
		const {h: handleHeight = 18, w: handleWidth = 18, bgColor: handleColor = 'blue', ...handleRest} = handleProps
		const {h: barHeight = 5, ...barRest} = barProps
		const {value, active} = state
		const percent = (value * 100) + '%'

		return (
			<Block id={path} w={'100%'} relative py={handleHeight / 2} my='s' {...rest}>
				<Window onMouseUp={actions.setActive(false)} onMouseMove={active && decodeRaw(actions.drag)} />
				<Block 
					onMouseDown={actions.setActive(true)}
					borderRadius={9999} 
					overflow='hidden' 
					bgColor='#CCC' 
					h={barHeight} 
					relative 
					pointer 
					{ ...barRest }>
					<Block bgColor={handleColor} w={percent} absolute tall top left {...progressProps} />
				</Block>
				<Block 
					onMouseDown={actions.setActive(true)}
					boxShadow='inset 0 0 0 1px rgba(0,0,0,.15), 0 1px 2px rgba(0,0,0,.5)'
					transform={active ? 'scale(1.1)' : ''}
					transition='transform .1s'
					ml={handleWidth / -2}
					bgColor={handleColor} 
					top={barHeight / 2}
					borderRadius={9999} 
					h={handleHeight} 
					w={handleWidth} 
					left={percent}
					absolute
					pointer
					{...handleRest}
					/>
			</Block>
		)
	},
	controller: {
		* handleNewValue ({props, actions, state}, v) {
			const {min = 0, max = 10} = props
			yield actions.setValue(v)
			if (props.onChange) {
				yield props.onChange(percentToVal(v, min, max))
			}

		},
		* drag ({props, actions, state, path}, e) {
			const box = document.getElementById(path).getBoundingClientRect()
			const v = (e.pageX - box.left) / box.width
			yield actions.handleNewValue(clamp(v))
		}
	},
	reducer: {
		setValue: (state, payload) => ({...state, value: payload}),
		setActive: (state, payload) => ({...state, active: payload})
	}
})

/**
 * Helpers
 */

function valToPercent (val, min, max) {
	return (val - min) / (max - min)
}

function percentToVal (percent, min, max) {
	return (percent * (max - min)) + min
}

function clamp (val, min = 0, max = 1) {
	return Math.min(Math.max(val, min), max)
}

