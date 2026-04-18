'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TeamMemberCardProps {
  position: 'left' | 'right'
  jobPosition?: string
  firstName?: string
  lastName?: string
  imageUrl?: string
  subtitle?: string
  description?: string
  className?: string
}

export default function TeamMemberCard({
  position = 'left',
  jobPosition = 'Backend Engineer',
  firstName = 'Jennie',
  lastName = 'Garcia',
  imageUrl = 'https://images.unsplash.com/photo-1526510747491-58f928ec870f?fm=jpg&q=60',
  subtitle,
  description = 'Jennie is a skilled developer with expertise in modern web technologies and a passion for creating seamless user experiences.',
  className,
}: TeamMemberCardProps) {
  const fullName = `${firstName} ${lastName}`
  const isPositionRight = position === 'right'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn('relative flex flex-col justify-center', className)}
    >
      {/* jobPosition label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p
          className={cn(
            'mb-4 text-xs font-medium tracking-[0.3em] text-muted uppercase',
            isPositionRight && 'text-right'
          )}
        >
          {jobPosition}
        </p>
      </motion.div>

      {/* Two-column layout: image + info side by side */}
      <div className={cn(
        'grid grid-cols-[360px_1fr] gap-0',
        isPositionRight && 'grid-cols-[1fr_360px]'
      )}>
        {/* Portrait image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'relative h-[500px] overflow-hidden',
            isPositionRight && 'order-2'
          )}
        >
          <div className='pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-transparent' />
          <img
            src={imageUrl}
            alt={fullName}
            className='h-full w-full object-cover duration-500 ease-[0.22,1,0.36,1] hover:scale-105'
          />
        </motion.div>

        {/* Info column — uses grid row to match image height, content centered via flex */}
        <motion.div
          initial={{ opacity: 0, x: isPositionRight ? -40 : 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'relative z-[2] flex h-[500px] flex-col justify-center gap-10 pl-8',
            isPositionRight ? 'order-1 pr-8 pl-0 items-end' : '-ml-8'
          )}
        >
          {/* Name + subtitle */}
          <div className={cn(isPositionRight && 'text-right')}>
            <p className='text-5xl leading-[1.1] font-extralight tracking-tight text-text-primary'>
              {firstName}
              <br />
              <span className='font-normal'>{lastName}</span>
            </p>
            {subtitle && (
              <p className='mt-4 text-xs font-medium tracking-[0.3em] text-muted uppercase'>
                {subtitle}
              </p>
            )}
          </div>

          {/* Arrow + bio */}
          <div className={cn('flex gap-6 items-center', isPositionRight && 'flex-row-reverse')}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className='group flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/20 transition-colors duration-300 hover:border-white/60 hover:bg-white/10'
            >
              <ArrowRight
                size={20}
                className={cn(
                  'text-muted transition-all duration-300 group-hover:-rotate-45 group-hover:text-text-primary',
                  isPositionRight && 'rotate-180 group-hover:rotate-[225deg]'
                )}
              />
            </motion.div>

            <p
              className={cn(
                'max-w-[260px] text-sm leading-[1.8] text-muted',
                isPositionRight && 'text-right'
              )}
            >
              {description}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
