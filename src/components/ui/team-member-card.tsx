'use client'

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
        className={cn('flex w-[360px] max-w-full justify-center', isPositionRight && 'ml-auto')}
      >
        <p
          className={cn(
            'mb-4 text-base md:text-[1.05rem] font-medium tracking-[0.3em] text-muted uppercase',
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
          <div className='pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_55%_40%,rgba(204,142,84,0.18),transparent_68%)] blur-3xl' />
          <img
            src={imageUrl}
            alt={fullName}
            className='h-full w-full object-cover brightness-[0.94] contrast-[1.02] saturate-[0.88] sepia-[0.08] duration-500 ease-[0.22,1,0.36,1] hover:scale-105'
          />
          <div className='pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(56,32,18,0.16)_36%,rgba(0,0,0,0.4)_100%)]' />
          <div className='pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_72%_28%,rgba(241,190,128,0.14),transparent_30%),radial-gradient(circle_at_28%_72%,rgba(198,134,74,0.1),transparent_34%)] mix-blend-screen' />
          <div className='pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-r from-transparent via-black/38 to-[hsl(var(--bg))]' />
          <div className='pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-b from-transparent via-black/35 to-[hsl(var(--bg))]' />
          <div className='pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-[hsl(var(--bg))]/55 to-transparent' />
        </motion.div>

        {/* Info column — uses grid row to match image height, content centered via flex */}
        <motion.div
          initial={{ opacity: 0, x: isPositionRight ? -40 : 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'relative z-[2] isolate flex h-[500px] flex-col justify-center gap-8 px-8 md:px-12',
            isPositionRight ? 'order-1 items-end pr-10 pl-8' : 'items-center md:pl-16 lg:pl-24'
          )}
        >
          <div
            className={cn(
              'pointer-events-none absolute inset-y-8 z-0 rounded-[2.5rem]',
              isPositionRight
                ? 'left-0 right-10 bg-[linear-gradient(90deg,rgba(14,9,6,0.58),rgba(14,9,6,0.22),transparent)]'
                : 'left-10 right-0 bg-[radial-gradient(circle_at_30%_45%,rgba(24,16,10,0.56),rgba(16,11,8,0.4)_38%,rgba(11,8,6,0.1)_72%,transparent_100%)] backdrop-blur-[1.5px]'
            )}
          />

          {/* Name + subtitle */}
          <div className={cn('relative z-10 flex w-full', isPositionRight ? 'justify-end' : 'justify-center')}>
            <div className={cn('inline-flex max-w-full flex-col', isPositionRight ? 'items-end text-right' : 'items-start text-left')}>
              <p className='whitespace-nowrap text-[clamp(3.5rem,6.8vw,5rem)] leading-none font-extralight tracking-tight text-text-primary'>
                <span className='font-normal'>{fullName}</span>
              </p>
              {subtitle && (
                <p className='mt-4 self-center text-center text-xs font-medium tracking-[0.3em] text-muted uppercase'>
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          <p
            className={cn(
              'relative z-10 w-full max-w-[320px] text-sm leading-[1.8] text-muted',
              isPositionRight ? 'text-right' : 'text-center'
            )}
          >
            {description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
