/* eslint-disable @typescript-eslint/no-unsafe-argument */

/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/**
 * This file exports a React component called `Skeletronize`, which wraps its children with a Skeleton.Group component from the `moti` library.
 * The `Skeletronize` component is used to apply a skeletal loading effect to its children (that are wrapped with a Skeleton tag) when the `show` prop is set to `true`.
 *
 * The `Skeletronize` component takes in the following props:
 * - `children`: The children elements to be wrapped with the Skeleton.Group.
 * - `show`: A boolean indicating whether to show the skeleton loading effect.
 * - `customSkeletons`: Optional. Custom skeleton configurations for specific child elements based on their ids.
 *
 * Inside the component, there's an internal function called `iterateOverChildren`,
 * which recursively iterates over the children elements and applies the Skeleton Wrapper where ids are found.
 * Also if customSkeletons are provided, it applies the custom configurations to the respective child element's Skeleton wrapper.
 *
 */
import React, { Children, cloneElement } from 'react'

import { COLORS } from '@theme'
import { MotiSkeletonProps } from 'moti/build/skeleton/types'
import { Skeleton } from 'moti/skeleton'

const iterateOverChildren = (
  children: React.ReactNode,
  customSkeletons:
    | {
        [id: string]: Omit<MotiSkeletonProps, 'Gradient'>
      }
    | undefined = {}
): React.ReactNode => {
  return Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child

    if (child?.props?.id === undefined) {
      return cloneElement(child, {
        ...child.props,
        children: iterateOverChildren(child.props.children, customSkeletons),
      })
    }

    const skeletonProps = customSkeletons[child.props.id] ?? {}
    return (
      <Skeleton {...skeletonProps} colors={COLORS.SKELETON_PALETTE}>
        {cloneElement(child, {
          ...child.props,
          children: iterateOverChildren(child.props.children, customSkeletons),
        })}
      </Skeleton>
    )
  })
}

export const Skeletronize = ({
  children,
  show,
  customSkeletons,
}: {
  children: React.ReactNode
  show: boolean
  customSkeletons?: {
    [id: string]: Omit<MotiSkeletonProps, 'Gradient'>
  }
}) => {
  return (
    <Skeleton.Group show={show}>
      {iterateOverChildren(children, customSkeletons)}
    </Skeleton.Group>
  )
}
